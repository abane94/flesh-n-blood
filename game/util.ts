import { Creature, CreatureCard } from "./types/common.ts";

// adapted from https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
export function shuffle<T>(array: T[], copy = false): T[] {
    if (copy) {
        array = [...array];
    }
    let i = array.length;
    while (--i > 0) {
       const temp = Math.floor(Math.random() * (i + 1));
       [array[temp], array[i]] = [array[i], array[temp]];
    }
    return array
};

export function deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export function creatureInstance(card: CreatureCard): Creature {
    const stats = deepCopy(card.stats);

    const creature: Creature = {
        ...deepCopy(card),
        currentStats: stats
    }

    return creature;
}