import { createHelperFunctions, TaggedUnion } from "npm:ts-tagged-union@1.1.1";
import { GameState } from "../game/types/game.ts";

export type LobbyGameStatus = "Open" | "InProgress" | "Cancelled" | "Finished";
type LobbyGameStatus_ExceptOpen = "InProgress" | "Cancelled" | "Finished";
export type GameId = string;

// Define a tagged union type

// interface LobbyGameEnum{
//     open: {game: Partial<GameState>}
//     inProgress: { game: GameState },
//     finished: {}
// }
// export type LobbyGameKeys = keyof LobbyGameEnum;
// export type LobbyGame = TaggedUnion<LobbyGameEnum>
// export const LobbyGame = createHelperFunctions<LobbyGame>()

interface LobbyGameBase {
  id: string;
  player0Name: string;
  status: LobbyGameStatus_ExceptOpen;
  game: GameState;
  player1Name: string;
  log: string[];
}

export interface LobbyGameOpen {
  id: string;
  player0Name: string;
  status: "Open";
  game: Partial<GameState>;
  player1Name?: string;
  log: string[];
}

export type LobbyGame = LobbyGameBase | LobbyGameOpen;
