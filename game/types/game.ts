import { PlayerState } from "../../config.ts";
import { CreatureCard, Deck, Player } from "./common.ts";
import { createHelperFunctions, TaggedUnion } from "npm:ts-tagged-union@1.1.1";

interface GamePhaseEnum {
  init: {};
  player0JustPlayed: {};
  player1JustPlayed: {};

  player0Playing: {};
  player1Playing: {};
}
export type GamePhaseKeys = keyof GamePhaseEnum;
export type GamePhase = TaggedUnion<GamePhaseEnum, "__tag">;
export const GamePhase = createHelperFunctions<GamePhase>("__tag");

export interface PlayerData {
  id: Player;
  hand: string[];
  state: PlayerState;
}

export interface GameState {
  player0: Player;
  player1: Player;

  player0Data: PlayerData;
  player1Data: PlayerData;

  phase: GamePhase;
}

export interface BaseEvent {
  update: { state: GameState };
}
