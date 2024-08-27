import { PlayerState } from "../../config.ts";
import { CombatState } from "./combat.ts";
import { CreatureCard, Deck, Player } from "./common.ts";
import { createHelperFunctions, TaggedUnion } from "npm:ts-tagged-union@1.1.1";

// Define a tagged union type

interface GamePhaseEnum {
  init: {};
  player0JustPlayed: {};
  player1JustPlayed: {};

  player0Playing: {};
  player1Playing: {};

  // initiatorJustPassed: { },
  // defenderJustPassed: { },
}
export type GamePhaseKeys = keyof GamePhaseEnum;
export type GamePhase = TaggedUnion<GamePhaseEnum, "__tag">;
export const GamePhase = createHelperFunctions<GamePhase>("__tag");

export interface GameState_OLD { // TODO: distinction between game state and combat state, this is where the difference between creatureCard and creature (instantiation) will come into play
  player0: Player;
  player1: Player;

  player0deck: Deck;
  player1deck: Deck;

  player0hand: Deck;
  player1hand: Deck;

  player0CreatureCard: CreatureCard;
  player1CreatureCard: CreatureCard;

  player0Discard: Deck;
  player1Discard: Deck;

  combatState?: null | CombatState;
  phase: GamePhase;
}

// UPDATE:
// export interface PlayerData<T> {
//     id: Player
//     deck: Deck;
//     hand: Deck;
//     discard: Deck;

//     creatureCard: T;

// }

export interface PlayerData {
  id: Player;
  hand: string[];
  state: PlayerState;
}

// export interface GameState {
//     player0: Player;
//     player1: Player;

//     player0Data: PlayerData<CreatureCard>;
//     player1Data: PlayerData<CreatureCard>;

//     combatState?: null | CombatState
//     phase: GamePhase
// }

export interface GameState {
  player0: Player;
  player1: Player;

  player0Data: PlayerData;
  player1Data: PlayerData;

  combatState?: null | CombatState;
  phase: GamePhase;
}

export interface BaseEvent {
  update: { state: GameState };
}
