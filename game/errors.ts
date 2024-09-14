// import { GamePhaseKeys } from "./types/game.ts";

export class ProjectError extends Error {}

export class MatchError extends ProjectError {}

export class Leave extends ProjectError {}
