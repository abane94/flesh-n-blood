import { type TaggedUnion, createHelperFunctions } from 'npm:ts-tagged-union@1.1.1';

export type PlayerId = string;
export type AttackId = string;
export type CreatureId = string;
export type CardId = string;

// // Define a tagged union type
// export type Player = TaggedUnion<{
//     _0: {id: PlayerId}
//     _1: {id: PlayerId}
// }>
  
// // Get helper functions for the type
// export const Player = createHelperFunctions<Player>()
export type Player = PlayerId;

export interface BaseCard<T> {
    id: T;
    cardId: CardId;
    name: string;
    chaoticId: string;
    cardImage: string;
    // thumb: string;
}

export interface AttackCard extends BaseCard<AttackId> {
    buildPoints: number;
    base: number;
    fire: number;
    air: number;
    earth: number;
    water: number;
    unique: boolean;
    // ability is the check or challenge stuff
}

export type Deck = AttackCard[];

export type Tribe = 
    | 'OverWorld'
    | 'Mipedian'
    | 'UnderWorld'
    | 'Danian'
    | "M'arrillian"
    | "Generic";

export type Element = 
    |'fire'
    | 'air'
    | 'earth'
    | 'water';

export interface CreatureCard extends BaseCard<CreatureId> {
    tribe: Tribe
    stats: CreatureStats;
    thumb: string;
}
export interface Creature extends CreatureCard {
    currentStats: CreatureStats;
}

export interface CreatureStats {
    courage: number,
    wisdom: number,
    speed: number,
    power: number,
    energy: number,
    fire: boolean,
    water: boolean,
    earth: boolean,
    air: boolean,
    // damageTargeting: number,
}
