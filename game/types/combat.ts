import { TaggedUnion, createHelperFunctions } from "npm:ts-tagged-union@1.1.1";
import { Creature, Player } from "./common.ts";
import { BurstState } from "./burst.ts";



interface CombatPhaseEnum {
    init: { },

    initiatorPlaying: { },
    defenderPlaying: { },

    initiatorJustPLayed: { },
    defenderJustPlayed: { },
    initiatorJustPassed: { },
    defenderJustPassed: { },
}
export type CombatPhaseKeys = keyof CombatPhaseEnum;
export type CombatPhase = TaggedUnion<CombatPhaseEnum, '__tag'>;
export const CombatPhase = createHelperFunctions<CombatPhase>('__tag')






export interface CombatState {
    player0Creature: Creature,
    player1Creature: Creature,
    initiator: Player,
    defender: Player,

    combatPhase: CombatPhase

    burstState?: null | BurstState
}


// // Define a tagged union type
// export type CombatAtions = TaggedUnion<{  // things that cause the combat enum to change
// }>
  
// // Get helper functions for the type
// export const CombatAtions = createHelperFunctions<CombatAtions>()
