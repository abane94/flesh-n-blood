import { createEffect, createResource, createSignal, For } from "solid-js";
import { LobbyGame } from "../../server/lobby-types";
import { createStore } from "solid-js/store";
import { createReconnectingWS, WSMessage } from "@solid-primitives/websocket";
import { apiBaseRoute, webSocketBaseRoute } from "./config";

// new for fnb
export const [deckData, setDeckData] = createSignal<Record<string, string>>();

// still needed
export const [name, setName] = createSignal("");

export const [gameId, setGameId] = createSignal("");

export const [userId, setUserId] = createSignal("");

export const [isPlayer0, setIsPlayer0] = createSignal(false);

const player0Name = () => gameState()?.player0Name;
const player1Name = () => gameState()?.player1Name;

export const opponentName = () => isPlayer0() ? player1Name() : player0Name();

export const hand = () =>
  isPlayer0()
    ? gameState()?.game.player0Data?.hand
    : gameState()?.game.player1Data?.hand;

export const gameStatus = () => gameState()?.status;

const fetchGameState = async (id: string) => {
  if (!id) return;
  return (await (await fetch(`${apiBaseRoute}game/${id}`)).json()).state;
};

const [gameState, { mutate, refetch }] = createResource<LobbyGame>(
  gameId,
  fetchGameState,
);
export { gameState };

const [webSocket, setWebSocket] = createSignal<WebSocket>();

createEffect(() => {
  if (webSocket()) return;
  if (!gameId()) return;
  try {
    const ws = createReconnectingWS(`${webSocketBaseRoute}ws/?id=${userId()}`);
    ws.addEventListener("message", (ev) => {
      console.log(ev.data);
      refetch(gameId);
    });
  } catch (err) {
    console.log(err);
  }
});
