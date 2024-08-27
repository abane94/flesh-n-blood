import {
  createHelperFunctions,
  type TaggedUnion,
} from "npm:ts-tagged-union@1.1.1";
import { PlayerId } from "../types/common.ts";
import { BaseEvent, GameState } from "../types/game.ts";

interface GameActionsEnum {
  join: { id: PlayerId };
  // attack: {},
  move: {};
  draw: {};
  flip: {};
  leave: {};
}
export type GameActionsKeys = keyof GameActionsEnum;
export type GameActions = TaggedUnion<GameActionsEnum, "__tag">;
export const GameActions = createHelperFunctions<GameActions>("__tag");

interface GameEventEnum extends BaseEvent { // all events should includes the new GameState
  // update: { state: GameState };
  gameOver: { winner: PlayerId; state: GameState };
}
export type GameEventKeys = keyof GameEventEnum;
export type GameEvent = TaggedUnion<GameEventEnum, "__tag">;
export const GameEvent = createHelperFunctions<GameEvent>("__tag");

//                         Join(0)  |      Join(1)     |      attack(0)  |       attack(1)        |   leave(0)        |    leave(1)

// init                |  invalid   | player1JustPlayed|       -         |         invalid        |  remove game      |    invalid
// player0JustPlayed   |  invalid   |   invalid        |    invalid/-    |     player1Playing     |
// player1JustPlayed   |  invalid   |   invalid        |  player0Playing |          invalid/-
// player0Playing      |  invalid   |   invalid        |        -        |          -             |
// player1Playing      |  invalid   |   invalid        |        -        |          -             |

// combat action or burst action ?
// only if player0Playing or player1Playing

// export type TurnPhase = TaggedUnion<{
//     join: { id: PlayerId},
//     attack: {},
//     leave: {}
// }>
// export const TurnPhase = createHelperFunctions<TurnPhase>()

// export type TurnActions = TaggedUnion<{
//     join: { id: PlayerId},
//     attack: {},
//     leave: {}
// }>
// export const TurnActions = createHelperFunctions<TurnActions>()
