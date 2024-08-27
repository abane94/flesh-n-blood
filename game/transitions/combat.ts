import { TaggedUnion, createHelperFunctions } from "npm:ts-tagged-union@1.1.1";
import { GameActions } from "../actions/game-actions.ts";
import { AttackCard, AttackId, CardId, Creature, Deck, Element, Player } from "../types/common.ts";
import { GamePhase, GameState, PlayerData } from "../types/game.ts";
import { CombatActions, CombatEvent } from "../actions/combat-actions.ts";
import { CombatStateError, GameStateError, Leave, MatchError, ProjectError } from "../errors.ts";
import { CombatPhase, CombatState } from "../types/combat.ts";
import { ActionType } from "./game.ts";
import { shuffle } from "../util.ts";

// type CombatReturnType = [(CombatPhase | ProjectError)?, CombatEvent?];
type CombatReturnType = [(CombatPhase | ProjectError)] | [undefined, CombatEvent];

export function applyCombatAction(gameState: GameState, action: ActionType, player: Player): CombatEvent | CombatStateError {
    const isPlayer0 = gameState.player0 === player;
    const state = gameState.combatState!
    const isInitiator = state.initiator === player;


    const [actionResult, event]: CombatReturnType = ActionType.match(action, {
        game: (_action): CombatReturnType => [new MatchError('Attempting to apply combat action, but recieved Game Action: ' + action.action)],
        combat: (_action): CombatReturnType => {
            return CombatActions.match(_action.action, {
                draw: (): CombatReturnType => draw(gameState, player, isInitiator, isPlayer0),
                playAttack: ({attacker, attack, target}): CombatReturnType => playAttack(gameState, player, isInitiator, isPlayer0, attacker, attack, target),
                pass: (): CombatReturnType => pass(gameState, player, isInitiator, isPlayer0)
            })
            
        }
    });

    if (actionResult instanceof ProjectError) {
        return actionResult;
    }
    if (event) {
        return event;
    }
    gameState.combatState!.combatPhase! = actionResult!
    return CombatEvent.update({ state: gameState});



    // return [new ProjectError('Not implemented')];
}


function draw(state: GameState, player: Player, isInitiator: boolean, isPlayer0: boolean): CombatReturnType {
    //                      |  draw(I)         | draw(D)          |

    // init                 | initiatorPlaying |       -          |
    // initiatorPlaying     | -                |  -               |
    // defenderPlaying      | -                |  -               |
    // initiatorJustPLayed  | -                | defenderPlaying  |
    // defenderJustPlayed   | initiatorPlaying |       -          |
    // initiatorJustPassed  |
    // defenderJustPassed   |
    
    return CombatPhase.match(state.combatState!.combatPhase, {
        init: (): CombatReturnType => [isInitiator ? _drawHelper(isPlayer0 ? state.player0Data : state.player1Data, CombatPhase.initiatorPlaying()) : new CombatStateError('init', 'draw', '')],
        initiatorPlaying: (): CombatReturnType => [new CombatStateError('initiatorPlaying', 'draw', '')],
        defenderPlaying: (): CombatReturnType => [new CombatStateError('defenderPlaying', 'draw', '')],
        initiatorJustPLayed: (): CombatReturnType => [isInitiator ? new CombatStateError('initiatorJustPLayed', 'draw', '') : _drawHelper(isPlayer0 ? state.player0Data : state.player1Data, CombatPhase.defenderPlaying())],
        defenderJustPlayed: (): CombatReturnType => [isInitiator ? _drawHelper(isPlayer0 ? state.player0Data : state.player1Data, CombatPhase.initiatorPlaying()) : new CombatStateError('defenderJustPlayed', 'draw', '')],
        initiatorJustPassed: (): CombatReturnType => [new CombatStateError('initiatorJustPassed', 'draw', '')],
        defenderJustPassed: (): CombatReturnType => [new CombatStateError('defenderJustPassed', 'draw', '')],
    });

}

function _drawHelper<T>(playerData: PlayerData<T>, nextState: CombatPhase): CombatPhase {
    if (!playerData.deck.length) {
        const discard: Deck = [];
        while (playerData.discard.length) {
            const c = playerData.discard.pop()!;
            discard.push(c);
        }
        playerData.deck.push(...shuffle(discard));
    }
    const card = playerData.deck.pop()!;
    playerData.hand.push(card);

    return nextState;
}

function playAttack(state: GameState, player: Player, isInitiator: boolean, isPlayer0: boolean, attacker: Creature, attack: AttackCard, target: CardId): CombatReturnType {
    //                      | playAttack(I)         | playAttack(D)         |

    // init                 |         -             |            -          |
    // initiatorPlaying     |  initiatorJustPLayed  |  -                    |
    // defenderPlaying      |       -               |  defenderJustPlayed   |
    // initiatorJustPLayed  |     -                 |          -            |
    // defenderJustPlayed   |         -             |            -          |

    return CombatPhase.match(state.combatState!.combatPhase, {
        init:                   (): CombatReturnType => [new CombatStateError('init', 'playAttack', '')],
        initiatorPlaying:       (): CombatReturnType => isInitiator ? _playAttackHelper(state, player, isPlayer0, attacker, attack, target, CombatPhase.initiatorJustPLayed()) : [new CombatStateError('initiatorPlaying', 'playAttack', '')],
        defenderPlaying:        (): CombatReturnType => isInitiator ? [new CombatStateError('defenderPlaying', 'playAttack', '')] : _playAttackHelper(state, player, isPlayer0, attacker, attack, target, CombatPhase.defenderJustPlayed()),
        initiatorJustPLayed:    (): CombatReturnType => [new CombatStateError('initiatorJustPLayed', 'playAttack', '')],
        defenderJustPlayed:     (): CombatReturnType => [new CombatStateError('defenderJustPlayed', 'playAttack', '')],
        initiatorJustPassed:    (): CombatReturnType => [new CombatStateError('initiatorJustPassed', 'playAttack', '')],
        defenderJustPassed:     (): CombatReturnType => [new CombatStateError('defenderJustPassed', 'playAttack', '')],
    });
}

function _playAttackHelper(state: GameState, player: Player, isPlayer0: boolean, attacker: Creature, attackArg: AttackCard, target: CardId, nextState: CombatPhase): CombatReturnType {
    // TODO: action args should only be ids, otherwise the client is being trusted to provide the correct data
    const targetCreature = state.combatState!.player0Creature.cardId === target
        ? state.combatState!.player0Creature
        : state.combatState!.player1Creature.cardId === target
            ? state.combatState!.player1Creature
            : null;
    const phaseStr = state.combatState!.combatPhase[CombatPhase.tagKey]
    if (!targetCreature) { return [new CombatStateError(phaseStr, 'playAttack', 'Target must be a creature in play, target was: ' + target)]; }

    if (state.combatState![isPlayer0 ? 'player0Creature' : 'player1Creature'].cardId !== attacker.cardId) {
        return [new CombatStateError(phaseStr, 'playAttack', 'Attacker must be the current users creature, attacker was: ' + attacker.cardId)];
    }
    const attackingCreature = state.combatState![isPlayer0 ? 'player0Creature' : 'player1Creature'];
    const [attack, newHand] = _getAttackFromHand(attackArg.cardId, isPlayer0 ? state.player0Data : state.player1Data)
    let damage = attack.base;
    for (const element of ['fire', 'air', 'earth', 'water'] as Element[]) {
        if (attackingCreature.currentStats[element]) {
            damage += attack[element];
        }
    }
    if (isPlayer0) {
        state.player0Data.hand = newHand;
    } else {
        state.player1Data.hand = newHand;
    }
    targetCreature.currentStats.energy -= damage;

    if (targetCreature.currentStats.energy <= 0) {
        targetCreature.currentStats.energy = 0;
        return [undefined, CombatEvent.CombatOver({ winner: player, state })]
    }
    return [nextState];

}

function _getAttackFromHand<T>(attackId: AttackId, playerData: PlayerData<T>): [AttackCard, Deck] {
    const hand = playerData.hand;
    const idx = hand.findIndex((card) => card.cardId === attackId);
    const attack = hand[idx];
    
    if (idx > -1) {
        hand.splice(idx, 1);
    }
    return [attack, hand];
}

function pass(gameState: GameState, player: Player, isInitiator: boolean, isPlayer0: boolean): CombatReturnType {
    return [new ProjectError('Not implemented')];
}