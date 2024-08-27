import { Context, Hono, HTTPException } from "https://deno.land/x/hono/mod.ts";
import {
  GameId,
  LobbyGame,
  LobbyGameOpen,
  LobbyGameStatus,
} from "./lobby-types.ts";
import { allCreatures, createCreatureCard, Games, Sockets } from "./db.ts";
// import { CreatureCard, CreatureId, Deck, Player, PlayerId } from "../game/types/common.ts";
import { getAttackDeck, guid } from "./util.ts";
// import { GameState } from "../game/types/game.ts";
// import { GamePhase } from "../game/types/game.ts";
// import { GameActions, GameActionsKeys, GameEvent, GameEventKeys } from "../game/actions/game-actions.ts";
// import { CombatActions, CombatActionsKeys } from "../game/actions/combat-actions.ts";
// import { ActionType, applyGameAction } from "../game/transitions/game.ts";
// import { Leave } from "../game/errors.ts";

const api = new Hono();

api.get("/", (c: Context) => c.text("Hello Deno!"));

interface CreateRequest {
  name: string;
  creature: CreatureId;
}
interface CreateResponse {
  userId: Player;
  gameId: GameId;
}

// status
api.get("/game/:gameId", (c: Context) => { // status = LobbyGameStatus
  const id = c.req.param("gameId");
  const game = Games[id];

  if (!game) {
    throw new HTTPException(401, { message: "Game not available to join" }); // TODO standardize error codes
  }

  return c.json({
    ok: true,
    state: game, // TODO: mask the data
  });
});

// create game
api.post("/game", async (c: Context) => {
  const body: CreateRequest = await c.req.json();
  const playerId = guid();
  const gameId = guid();
  const creatureCard = createCreatureCard(body.creature);
  const deck = getAttackDeck(creatureCard);
  const hand = [deck.pop(), deck.pop()] as Deck; // start hand with 2 cards, bc a players first action is to draw
  const newGame: Partial<GameState> = {
    player0: playerId,
    player0Data: {
      id: playerId,
      deck,
      hand,
      discard: [],
      creatureCard,
    },
    // player1Data
    combatState: null,
    phase: GamePhase.init(),
  };
  const newLobbyGame: LobbyGame = {
    id: gameId,
    player0Name: body.name,
    status: "Open",
    game: newGame,
  };
  Games[gameId] = newLobbyGame;
  const resp: CreateResponse = {
    userId: playerId,
    gameId,
  };
  return c.json({
    ok: true,
    payload: resp,
  });
});

// list games
api.get("/game", (c: Context) => { // status = LobbyGameStatus
  const status = c.req.query("status") as LobbyGameStatus | undefined;
  let games = Object.values(Games);
  if (status) {
    games = games.filter((entry) => entry.status === status);
  }
  return c.json({
    ok: true,
    games,
  });
});

interface JoinRequest {
  name: string;
  creature: CreatureId;
}
interface JoinResponse {
  userId: Player;
  gameId: GameId;
}

api.post("/join/:gameId", async (c: Context) => {
  const gameId = c.req.param("gameId");

  const body: JoinRequest = await c.req.json();
  const playerId = guid();

  const lobbyGame = Games[gameId];
  if (!lobbyGame || lobbyGame.status !== "Open") {
    throw new HTTPException(401, { message: "Game not available to join" }); // TODO standardize error codes
  }

  // const creature
  const creatureCard = createCreatureCard(body.creature);
  const deck = getAttackDeck(creatureCard);
  const hand = [deck.pop(), deck.pop()] as Deck;

  const game: LobbyGame = {
    ...lobbyGame,
    status: "InProgress",
    player1Name: body.name,
    game: {
      ...(lobbyGame.game as GameState),
      player1: playerId,
      player1Data: {
        id: playerId,
        deck,
        hand,
        discard: [],
        creatureCard: createCreatureCard(body.creature),
      },
    },
  };
  Games[gameId] = game;

  const resp: JoinResponse = {
    userId: playerId,
    gameId: gameId,
  };
  const actionResult = applyGameAction(
    game.game,
    ActionType.game({ action: GameActions.join({ id: playerId }) }),
    playerId,
  );

  if (actionResult instanceof Error) {
    throw new HTTPException(401, { message: actionResult.message }); // TODO standardize error codes
  }
  // shouldnt need to handle the GameEvent, since it would just be an update (?) at this point, and I already know what to do as a result

  broadcast(gameId, playerId, "join");
  return c.json({
    ok: true,
    payload: resp,
  });
});

// actions
export interface ActionRequest {
  playerId: Player;
  gameId: GameId;
  actionPayload: any;
  action: { actionType: "Combat"; actionName: CombatActionsKeys } | {
    actionType: "Game";
    actionName: GameActionsKeys;
  };
}
interface ActionResponse {
}
api.post("/action", async (c: Context) => { // type = 'Game' | 'Combat'
  // const actionType = c.req.param('type') as 'Game' | 'Combat';
  const body: ActionRequest = await c.req.json();
  const game = Games[body.gameId];
  if (!game || game.status !== "InProgress") {
    throw new HTTPException(401, { message: "Game not available for actions" }); // TODO standardize error codes
  }

  let action: ActionType;
  if (body.action.actionType === "Combat") {
    action = ActionType.combat({
      action: CombatActions[body.action.actionName](body.actionPayload),
    });
  } else if (body.action.actionType === "Game") {
    action = ActionType.game({
      action: GameActions[body.action.actionName](body.actionPayload),
    });
  } else {
    throw new HTTPException(401, { message: "Invalid Action type" }); // TODO standardize error codes
  }

  const result = applyGameAction(game.game, action, body.playerId);

  if (result instanceof Error) {
    if (result instanceof Leave) {
      broadcast(game.id, body.playerId, "leave");
      delete Sockets[body.playerId];
      // when to clean up other player socket??
      game.status = "Cancelled";
      Games[game.id] = game;
      return c.json({
        ok: true,
      });
    }
    throw new HTTPException(401, { message: result.message }); // TODO standardize error codes
  }

  game.game = result.state;
  Games[body.gameId] = game;

  GameEvent.match(result, {
    update: () => broadcast(body.gameId, body.playerId, "update"),
    gameOver: ({ winner }) =>
      broadcast(body.gameId, body.playerId, "gameOver", winner),
  });
  return c.json({
    ok: true,
    result: result,
  });
});

// data
type creatureFilters = keyof Pick<CreatureCard, "tribe">;
api.get("/data/creatures/:id", (c: Context) => {
  const id: LobbyGameStatus = c.req.param("id");
  const creatureCard = createCreatureCard(id);
  if (creatureCard) {
    return c.json({
      ok: true,
      creatureCard,
    });
  } else {
    throw new HTTPException(404, { message: "Creature not found" }); // TODO standardize error codes
  }
});
api.get("/data/creatures", (c: Context) => {
  const tribe = c.req.query("tribe");
  let creatures = allCreatures();
  if (tribe) {
    creatures = creatures.filter((c) =>
      c.tribe.toLowerCase() === tribe.toLowerCase()
    );
  }
  return c.json({
    ok: true,
    creatures,
  });
});

// web socket
api.get("/ws/", (c: Context) => {
  const playerId = c.req.query("id");
  if (!playerId) {
    throw new HTTPException(403, {
      message: "PlayerID required for websocket",
    }); // TODO standardize error codes
  }

  // if (c.req.raw.headers.get("upgrade") != "websocket") {
  //     return new Response(null, { status: 501 });
  //   }
  const { response, socket } = Deno.upgradeWebSocket(
    c.req.raw as unknown as Request,
  );
  // socket.addEventListener('message', (e) => console.log(e))
  // TODO: store socket
  Sockets[playerId] = socket;
  return response;
});

// app.get('/posts/:id', (c) => {
//     const page = c.req.query('page')
//     const id = c.req.param('id')
//     c.header('X-Message', 'Hi!')
//     return c.text(`You want see ${page} of ${id}`)
//   })

function broadcast(
  gameId: GameId,
  initiator: PlayerId,
  event: GameEventKeys | "join" | "leave",
  data?: any,
) {
  const game = Games[gameId];
  const payload = JSON.stringify({ gameId, initiator, event, data });
  Sockets[game.game.player0!].send(payload);
  if (Sockets[game.game.player1!]) {
    Sockets[game.game.player1!].send(payload);
  }
}

export default api;
