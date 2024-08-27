import { createEffect, createResource, createSignal, For } from "solid-js";
import { CreatureCard } from "../../game/types/common";
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

// old

export const [creatureCard, setCreatureCard] = createSignal<CreatureCard>();
export const opponentCreatureCard = () =>
  isPlayer0()
    ? gameState()?.game.player1Data?.creatureCard
    : gameState()?.game.player0Data?.creatureCard;

export const combatState = () => gameState()?.game.combatState;

export const gameStatus = () => gameState()?.status;

export const gamePhase = () => gameState()?.game.phase?.__tag;

export const canBeginCombat = () =>
  isPlayer0()
    ? gamePhase() === "player1JustPlayed"
    : gamePhase() === "player0JustPlayed";

export const myCreature = () =>
  isPlayer0() ? combatState()?.player0Creature : combatState()?.player1Creature;

export const opponentCreature = () =>
  isPlayer0() ? combatState()?.player1Creature : combatState()?.player0Creature;

export const isInitator = () =>
  userId() ===
    combatState()?.initiator;

export const combatPhase = () => combatState()?.combatPhase.__tag;

export const canDraw = () =>
  isInitator()
    ? combatPhase() === "init" || combatPhase() === "defenderJustPlayed"
    : combatPhase() === "initiatorJustPLayed";

export const canPlayAttack = () =>
  isInitator()
    ? combatPhase() === "initiatorPlaying"
    : combatPhase() === "defenderPlaying";

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
    // const ws = new WebSocket(`ws://localhost:8000/api/ws/?id=${userId()}`, "protocolOne");
    // setWebSocket(ws);

    // if (ws) {
    //     ws.addEventListener('message', (evt) => {
    //         console.log(evt);
    //     });
    // } else {
    //     console.log('could not listen for ws');
    // }

    const ws = createReconnectingWS(`${webSocketBaseRoute}ws/?id=${userId()}`);
    // const [messages, setMessages] = createStore<WSMessage[]>();
    ws.addEventListener("message", (ev) => {
      console.log(ev.data);
      refetch(gameId);
    });
  } catch (err) {
    console.log(err);
  }
});
