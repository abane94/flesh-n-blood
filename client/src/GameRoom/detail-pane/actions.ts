import { Spot, SpotState } from "../../../../config";
import { ActionRequest } from "../../../../server/api";
import { gameId, userId } from "../../global-state";

export const sendTo = async (
  cell: Spot,
  state: SpotState,
  targetLabel: string,
  index: number,
) => {
  return sendAction(cell, state, "SEND-TO", { targetLabel, fromIndex: index });
};

export const sendAll = async (
  cell: Spot,
  state: SpotState,
  targetLabel: string,
) => {
  return sendAction(cell, state, "SEND-ALL", { targetLabel });
};

export const flip = async (cell: Spot, state: SpotState) => {
  return sendAction(cell, state, "FLIP");
};

export const draw = async (cell: Spot, state: SpotState) => {
  return sendAction(cell, state, "DRAW");
};

export const search = async (cell: Spot, state: SpotState) => {
  return sendAction(cell, state, "SEARCH");
};

export const playCard = (
  cell: Spot,
  state: SpotState,
  targetLabel: string,
  index: number,
) => {
  return sendAction(cell, state, "PLAY-CARD", {
    targetLabel,
    fromIndex: index,
  });
};

export const setCounter = async (
  cell: Spot,
  state: SpotState,
  value: number,
) => {
  return sendAction(cell, state, "SET-COUNTER", { value });
};

export const setNotes = async (cell: Spot, state: SpotState, notes: string) => {
  return sendAction(cell, state, "SET-NOTES", { notes });
};

const sendAction = async (
  cell: Spot,
  state: SpotState,
  action: ActionRequest["action"],
  payload?: any,
) => {
  const body: ActionRequest = {
    playerId: userId(),
    gameId: gameId(),
    cell,
    state,
    actionPayload: payload,
    action,
  };
  const response = await (await fetch(`/api/action`, {
    method: "POST",
    body: JSON.stringify(body),
  })).json();
  console.log(response);
};
