import { TaggedUnion, createHelperFunctions } from "npm:ts-tagged-union@1.1.1";
import { GameActions, GameEvent } from "../actions/game-actions.ts";
import { AttackId, Player } from "../types/common.ts";
import { GamePhase, GameState } from "../types/game.ts";
import { CombatActions, CombatEvent } from "../actions/combat-actions.ts";
import { GameStateError, Leave, MatchError, ProjectError } from "../errors.ts";
import { applyCombatAction } from "./combat.ts";
import { CombatPhase, CombatState } from "../types/combat.ts";
import { creatureInstance } from "../util.ts";

export type ActionType = TaggedUnion<{
    game: {action: GameActions},
    combat: { action: CombatActions },
    // burst: { action: BurstActions}
}, '__tag'>
export const ActionType = createHelperFunctions<ActionType>('__tag')

type GameReturnType = [(GamePhase | ProjectError)?, GameEvent?];

export function applyGameAction(state: GameState, action: ActionType, player: Player): GameEvent | GameStateError {
    const [val, event]: GameReturnType = ActionType.match(action, {
        game: (_action): GameReturnType => {
            const isPlayer0 = player === state.player0;

            return GameActions.match(_action.action, { 
                join: (): GameReturnType => join(state, player, isPlayer0),

                attack: (): GameReturnType => attack(state, player, isPlayer0),

                leave: (): GameReturnType => [new Leave()]
            })

        },
        combat: (_action): GameReturnType => {
            if (state.combatState && (GamePhase.is.player0Playing(state.phase) || GamePhase.is.player1Playing(state.phase))) {
                const event = applyCombatAction(state, action, player); // should also be able to return an event enum, describing outer transitions, ie creature died - combat over/change turns
                if (event instanceof Error) {
                    return [event];
                }

                return CombatEvent.match(event, {
                    update:     ({ state} ): GameReturnType => [undefined, GameEvent.update({ state })],
                    CombatOver: ({ winner, state}): GameReturnType => {
                        state.combatState = null;
                        const newPhase: MatchError | GamePhase = GamePhase.match(state.phase, {
                            init:               () => new MatchError(),
                            player0JustPlayed:  () => new MatchError(),
                            player1JustPlayed:  () => new MatchError(),
                            player0Playing:     () => GamePhase.player0JustPlayed(),
                            player1Playing:     () => GamePhase.player1JustPlayed(),
                        });
                        if (newPhase instanceof ProjectError) {
                            return [newPhase];
                        } else {
                            state.phase = newPhase;
                        }
                        // since this is only 1on1, the game is over after combat
                        return [undefined, GameEvent.gameOver({ winner, state})]
                    }
                })
            }
            return [new MatchError];
        }
    });

    if (val instanceof ProjectError) {
        return val;
    }
    if (event) {
        return event;
    }
    state.phase = val!
    return GameEvent.update({state});

}


function join(state: GameState, player: Player, isPlayer0: boolean): GameReturnType {
    //                         Join(0)  |      Join(1)     |

    // init                |  invalid   | player1JustPlayed|
    // player0JustPlayed   |  invalid   |   invalid        |
    // player1JustPlayed   |  invalid   |   invalid        |
    // player0Playing      |  invalid   |   invalid        |
    // player1Playing      |  invalid   |   invalid        |

    return GamePhase.match(state.phase, {
        init(): GameReturnType {
            if (isPlayer0) {
                return [new GameStateError('init', 'join', '')];
            } else {
                return [GamePhase.player1JustPlayed()]
            }
        },
        player0JustPlayed: (): GameReturnType => [new GameStateError('player0JustPlayed', 'join', '')],
        player1JustPlayed: (): GameReturnType => [new GameStateError('player1JustPlayed', 'join', '')],
        player0Playing: (): GameReturnType => [new GameStateError('player0Playing', 'join', '')],
        player1Playing: (): GameReturnType => [new GameStateError('player1Playing', 'join', '')],
    });
}

function attack(state: GameState, player: Player, isPlayer0: boolean): GameReturnType {
    //                   |      attack(0)  |       attack(1)        | 

    // init              |       -         |         invalid        | 
    // player0JustPlayed |    invalid/-    |     player1Playing     | 
    // player1JustPlayed |  player0Playing |          invalid/-
    // player0Playing    |        -        |          -             |
    // player1Playing    |        -        |          -             |

    return GamePhase.match(state.phase, {
        init:               (): GameReturnType => [new GameStateError('init', 'attack', '')],
        player0JustPlayed:  (): GameReturnType => [isPlayer0 ? new GameStateError('player0JustPlayed', 'attack', '') : _attackHelper(state, isPlayer0, player, GamePhase.player1Playing())],
        player1JustPlayed:  (): GameReturnType => [isPlayer0 ? _attackHelper(state, isPlayer0, player, GamePhase.player0Playing()) : new GameStateError('player1JustPlayed', 'attack', '')],
        player0Playing:     (): GameReturnType => [new GameStateError('player0Playing', 'attack', '')],
        player1Playing:     (): GameReturnType => [new GameStateError('player1Playing', 'attack', '')],
    });
}

function _attackHelper(state: GameState, isPlayer0: boolean, player: Player, nextPhase: GamePhase): GamePhase | GameStateError {
    // create combat
    const combatState: CombatState = {
      player0Creature: creatureInstance(state.player0Data.creatureCard),
      player1Creature: creatureInstance(state.player1Data.creatureCard),
      initiator: player,
      defender: isPlayer0 ? state.player1 : state.player0,
      combatPhase: CombatPhase.init()
    }

    state.combatState = combatState;

    return nextPhase;
}
