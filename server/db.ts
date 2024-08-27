import { CreatureId, CreatureCard, AttackCard, AttackId } from "../game/types/common.ts";
import { LobbyGame } from "./lobby-types.ts";
import Creatures from '../data/creatures.ts';
import Attacks from "../data/attacks.ts";
import { guid } from "./util.ts";


export const Games: Record<string, LobbyGame> = {};
export const Sockets: Record<string, WebSocket> = {};


// dbs to seed
export const CreatureCards: Record<CreatureId, CreatureCard> = Creatures;
export const AttackCards: Record<AttackId, AttackCard> = Attacks;

export const createCreatureCard = (id: CreatureId): CreatureCard => {
    const card = CreatureCards[id];
    card.cardId = guid();
    return card;
}

export const allCreatures = () => Object.values(CreatureCards);
