import { HTTPException } from "https://deno.land/x/hono@v3.11.4/mod.ts";
import { ActionRequest } from "./api.ts";
import { LobbyGame } from "./lobby-types.ts";
import {
  Deck,
  DeckState,
  FleshBloodLayout,
  getConfigObject,
  SingleSpotState,
  Spot,
  SpotState,
} from "../config.ts";

export const applyAction = async (game: LobbyGame, action: ActionRequest) => {
  const isPlayer0 = action.playerId === game.game.player0;
  const playerName = isPlayer0 ? game.player0Name : game.player1Name || "-";

  switch (action.action) {
    case "SEND-TO":
      return sendTo(game, action);
    case "FLIP":
      return flip(game, action);
    case "DRAW":
      return draw(game, action, isPlayer0, playerName);
    case "SEARCH":
      throw new Error("Not implemented");
    case "SET-COUNTER":
      return setCounter(game, action, isPlayer0, playerName);
    case "SET-NOTES":
      return setNotes(game, action, isPlayer0, playerName);
    case "PLAY-CARD":
      return playCard(game, action);
    default:
      throw new HTTPException(401, {
        message: `Invalid Action type [${action.action}]`,
      }); // TODO standardize error codes
  }
};

const sendTo = (
  game: LobbyGame,
  action: ActionRequest,
): [LobbyGame, string] => {
  const isPlayer0 = action.playerId === game.game.player0;

  const targetLabel = action.actionPayload.targetLabel;
  const fromIndex = action.actionPayload.fromIndex;

  const targetState = game.game[isPlayer0 ? "player0Data" : "player1Data"]
    ?.state[targetLabel];
  const targetConfig = getConfigObject(FleshBloodLayout)[targetLabel];

  if (targetState?.type === "SPOT" && targetState.card) {
    throw new Error(`Spot [${targetLabel}] is occupied`);
  }

  if (action.cell.type === "SPOT") {
    if (targetConfig.type === "SPOT") {
      game.game[isPlayer0 ? "player0Data" : "player1Data"]!
        .state[targetLabel] = action.state;
    } else {
      (game.game[isPlayer0 ? "player0Data" : "player1Data"]
        ?.state[targetLabel] as DeckState).cards.unshift(
          (action.state as SingleSpotState).card,
        );
      // reset from state
      game.game[isPlayer0 ? "player0Data" : "player1Data"]!
        .state[action.cell.label] = {
          counter: action.cell.counter?.start || 0,
          type: "SPOT",
          faceDown: !!action.cell.faceDown,
          card: "",
          notes: "",
        };
    }
  } else {
    if (
      !game.game[isPlayer0 ? "player0Data" : "player1Data"]
        ?.state[action.cell.label]?.cards.length
    ) {
      throw new Error(`Empty deck [${targetLabel}]`);
    }

    // get card from source
    // const img = action.state.type === 'DECK' ?
    //     action.state.cards.length <= fromIndex ? action.state.cards[fromIndex] : ''
    //     : action.state.card
    let img: string;
    if (action.state.type === "DECK") {
      if (fromIndex >= action.state.cards.length) {
        throw new Error(`From error out of bounds`);
      }
      img = action.state.cards.splice(fromIndex, 1)[0];
      (game.game[isPlayer0 ? "player0Data" : "player1Data"]!
        .state[action.cell.label] as DeckState).cards = action.state.cards;
    } else {
      throw new Error("Invalid state");
      // img = action.state.card;
    }

    if (targetConfig.type === "SPOT") {
      // coming from deck going to spot

      const state: SingleSpotState = {
        type: "SPOT",
        faceDown: !!action.cell.faceDown,
        //   counter: action.cell.counter.start || 0,
        counter: action.cell?.counter?.start || 0,
        card: img,
        notes: "",
      };
      game.game[isPlayer0 ? "player0Data" : "player1Data"]!.state[targetLabel] =
        state;
    } else {
      // coming from deck going to deck
      (targetState as DeckState).cards.push(
        img,
      );
    }
  }

  return [
    game,
    `${
      isPlayer0 ? game.player0Name : game.player1Name
    } move card from ${action.cell.label} to ${targetLabel}`,
  ];
};

const playCard = (
  game: LobbyGame,
  action: ActionRequest,
): [LobbyGame, string] => {
  const isPlayer0 = action.playerId === game.game.player0;

  const targetLabel = action.actionPayload.targetLabel;
  const fromIndex = action.actionPayload.fromIndex;

  const targetState = game.game[isPlayer0 ? "player0Data" : "player1Data"]
    ?.state[targetLabel];
  const targetConfig = getConfigObject(FleshBloodLayout)[targetLabel];

  if (targetState?.type === "SPOT" && targetState.card) {
    throw new Error(`Spot [${targetLabel}] is occupied`);
  }

  // if (
  //   !game.game[isPlayer0 ? "player0Data" : "player1Data"]
  //     ?.hand?.length < fromIndex  // TODO: This needs an off by one change, prolly
  // ) {
  //   throw new Error(`Card not in Hand`);
  // }

  let img: string;
  // if (action.state.type === "DECK") {
  if (
    fromIndex >=
      (game.game[isPlayer0 ? "player0Data" : "player1Data"]?.hand?.length || 0)
  ) {
    throw new Error(`From error out of bounds`);
  }
  img = (game.game[isPlayer0 ? "player0Data" : "player1Data"]?.hand.splice(
    fromIndex,
    1,
  )[0]) || "";
  // (game.game[isPlayer0 ? "player0Data" : "player1Data"]!
  //   .state[action.cell.label] as DeckState).cards = action.state.cards;

  if (targetConfig.type === "SPOT") {
    // coming from deck going to spot

    const state: SingleSpotState = {
      type: "SPOT",
      faceDown: !!action.cell.faceDown,
      //   counter: action.cell.counter.start || 0,
      counter: action.cell?.counter?.start || 0,
      card: img,
      notes: "",
    };
    game.game[isPlayer0 ? "player0Data" : "player1Data"]!.state[targetLabel] =
      state;
  } else {
    // coming from deck going to deck
    (targetState as DeckState).cards.push(
      img,
    );
  }

  return [
    game,
    `${
      isPlayer0 ? game.player0Name : game.player1Name
    } move card from ${action.cell.label} to ${targetLabel}`,
  ];
};

const flip = (game: LobbyGame, action: ActionRequest): [LobbyGame, string] => {
  const isPlayer0 = action.playerId === game.game.player0;
  const state = isPlayer0
    ? game.game.player0Data?.state[action.cell.label]
    : game.game.player1Data?.state[action.cell.label];

  state!.faceDown = !state?.faceDown;

  return [
    game,
    `${
      isPlayer0 ? game.player0Name : game.player1Name
    } flipped ${action.cell.label}`,
  ];
};

const setCounter = (
  game: LobbyGame,
  action: ActionRequest,
  isPlayer0: boolean,
  playerName: string,
): [LobbyGame, string] => {
  const ogVal = game.game[isPlayer0 ? "player0Data" : "player1Data"]!
    .state[action.cell.label].counter || 0;
  game.game[isPlayer0 ? "player0Data" : "player1Data"]!.state[action.cell.label]
    .counter = action.actionPayload.value;

  return [
    game,
    `${playerName} changed ${action.cell.label} counter from ${ogVal} to ${action.actionPayload.value}`,
  ];
};

const setNotes = (
  game: LobbyGame,
  action: ActionRequest,
  isPlayer0: boolean,
  playerName: string,
): [LobbyGame, string] => {
  // const ogVal =
  //   game.game[isPlayer0 ? "player0Data" : "player1Data"]!
  //     .state[action.cell.label].counter || 0;
  game.game[isPlayer0 ? "player0Data" : "player1Data"]!.state[action.cell.label]
    .notes = action.actionPayload.notes;

  return [
    game,
    `${playerName} changed the notes of ${action.cell.label}`,
  ];
};

const draw = (
  game: LobbyGame,
  action: ActionRequest,
  isPlayer0: boolean,
  playerName: string,
): [LobbyGame, string] => {
  if (getConfigObject(FleshBloodLayout)[action.cell.label].type === "SPOT") {
    throw new Error(`Cant draw from Single spots [${action.cell.label}]`);
  }

  if (
    !(getConfigObject(FleshBloodLayout)[action.cell.label] as Deck).drawable
  ) {
    throw new Error(`Cant draw from [${action.cell.label}]`);
  }

  game.game[isPlayer0 ? "player0Data" : "player1Data"]!.hand.push(
    (game.game[isPlayer0 ? "player0Data" : "player1Data"]!
      .state[action.cell.label] as DeckState).cards.shift() || "",
  );

  return [
    game,
    `${playerName} drew a card from [${action.cell.label}], they now have ${
      game.game[isPlayer0 ? "player0Data" : "player1Data"]!.hand.length
    } cards in their hand`,
  ];
};
