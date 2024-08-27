import { CombatActionsKeys } from "./actions/combat-actions.ts";
import { GameActionsKeys } from "./actions/game-actions.ts";
import { CombatPhaseKeys } from "./types/combat.ts";
import { GamePhaseKeys } from "./types/game.ts";

export class ProjectError extends Error{}

export class MatchError extends ProjectError {}

export class GameStateError extends ProjectError {
    public name = 'GameStateError';
    constructor(currentPhase: GamePhaseKeys, action: GameActionsKeys | CombatActionsKeys, message: string) {
      super(`[${currentPhase}] -> [${action}]: ${message}`);
    }
}

export class CombatStateError extends ProjectError {
  public name = 'CombatStateError';
  constructor(currentPhase: CombatPhaseKeys, action: CombatActionsKeys, message: string) {
    super(`[${currentPhase}] -> [${action}]: ${message}`);
  }
}

export class Leave extends ProjectError {}
