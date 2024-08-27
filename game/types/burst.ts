import { TaggedUnion, createHelperFunctions } from "npm:ts-tagged-union@1.1.1";
import { CreatureStats, GameState, Player } from "./common.ts";
import { CombatState } from "./combat.ts";



// Define a tagged union type
export type EffectTarget = TaggedUnion<{
    effect: {}  // disable a different effect
    creature: {} // target a creature, dameage, healing, state changes
}, '__tag'>
  
// Get helper functions for the type
export const EffectTarget = createHelperFunctions<EffectTarget>('__tag')



export interface Effect {
    target: EffectTarget,
    // condition: SomeType,
    // value: i32,
}

export interface ApplyEffect{
    apply(combat_state: CombatState, cur_pos: number, list: ApplyEffect[]): never;
}

export interface BurstState {
    burstInitiator: Player,
    burstDefender: Player,
    // player0Creature: CreatureCard,
    // player1Creature: CreatureCard,
    // effects: Vec<Effect>
    effects: ApplyEffect[]
}


// Define a tagged union type
export type Burst = TaggedUnion<{
    init: { gameState: GameState, burstState: BurstState },
    initiatorJustPLayed: { gameState: GameState, burstState: BurstState },
    defenderJustPlayed: { gameState: GameState, burstState: BurstState },
    initiatorJustPassed: { gameState: GameState, burstState: BurstState },
    defenderJustPassed: { gameState: GameState, burstState: BurstState },
}, '__tag'>
  
// Get helper functions for the type
export const Burst = createHelperFunctions<Burst>('__tag')



export interface Meta {
    id: number,
    disabled: boolean,
    func: (mirror: BurstMirror, idx: number) => BurstMirror,
}

export interface BurstMirror {
    initiator: CreatureStats,
    defender: CreatureStats,
    pipe: Meta[],
}