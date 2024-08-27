import { CreatureCard, Deck } from "../game/types/common.ts";
import { shuffle } from "../game/util.ts";
import { AttackCards } from "./db.ts";

export function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}


export function getAttackDeck(creature: CreatureCard): Deck {
    const buildPoint0Cards = shuffle(filterUsefulAttacks(creature, Object.values(AttackCards).filter(atk => atk.buildPoints === 0)));
    const buildPoint1Cards = shuffle(filterUsefulAttacks(creature, Object.values(AttackCards).filter(atk => atk.buildPoints === 1)));
    const buildPoint2Cards = shuffle(filterUsefulAttacks(creature, Object.values(AttackCards).filter(atk => atk.buildPoints === 2)));
    const buildPoint3Cards = shuffle(filterUsefulAttacks(creature, Object.values(AttackCards).filter(atk => atk.buildPoints === 3)));
    const deck = shuffle([
        buildPoint3Cards.pop(), buildPoint3Cards.pop(),                                                                                     // 6 points
        buildPoint2Cards.pop(), buildPoint2Cards.pop(), buildPoint2Cards.pop(), buildPoint2Cards.pop(), buildPoint2Cards.pop(),             // 10 = 16
        buildPoint1Cards.pop(), buildPoint1Cards.pop(), buildPoint1Cards.pop(), buildPoint1Cards.pop(),                                     // 4 = 20
        
        buildPoint0Cards.pop(), buildPoint1Cards.pop(), buildPoint1Cards.pop(),
        buildPoint1Cards.pop(), buildPoint1Cards.pop(), buildPoint1Cards.pop(),
        buildPoint1Cards.pop(), buildPoint1Cards.pop(), buildPoint1Cards.pop(),
    ]) as Deck;
    return deck.filter(c => c).map(card => {
        card.cardId = guid();
        return card;
    });

}

function filterUsefulAttacks(creature: CreatureCard, deck: Deck): Deck {
    return deck.filter(atk => {
        return 0 < atk.base
            + (+creature.stats.fire * atk.fire)
            + (+creature.stats.water * atk.water)
            + (+creature.stats.air * atk.air)
            + (+creature.stats.earth * atk.earth);
    })
}