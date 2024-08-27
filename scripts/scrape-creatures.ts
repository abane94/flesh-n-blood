import db from "../chaotic-db.json" with { type: "json" };
import { AttackCard, AttackId, CreatureCard, CreatureId, Tribe } from "../game/types/common.ts";
import { guid } from "../server/util.ts";
import { join } from "https://deno.land/std/path/mod.ts";

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;


function main() {
    scrape_attacks();
    scrape_creatures();
}


function scrape_attacks() {
const attacksFromDB = db.collections.find(col => col.name === 'attacks')!.data as {
        "gsx$type": "Attacks",
        "gsx$name": string,
        "gsx$set": string,
        "gsx$rarity": string,
        "gsx$id": AttackId,
        /** string (number) */
        "gsx$bp": string,
        /** string (number) */
        "gsx$base": string,
        /** string (number) */
        "gsx$fire": string,
        /** string (number) */
        "gsx$air": string,
        /** string (number) */
        "gsx$earth": string,
        /** string (number) */
        "gsx$water": string,
        "gsx$types": "",
        "gsx$ability": string,
        "gsx$flavortext": string,
        "gsx$unique": "1",
        "gsx$image": string,
        "gsx$thumb": string,
        "gsx$splash": string,
        "gsx$artist": string,
        // "gsx$tags": "",
        // "gsx$exclusive": "",
        // "gsx$alt": "",
        // "gsx$animated": "",
        /** Full Card Image */
        "gsx$ic": string,
    }[];

    const attackCards: Record<AttackId, AttackCard> = {};

    for (const dbAttack of attacksFromDB) {
        const id = guid();
        const card: AttackCard = {
            buildPoints: +dbAttack.gsx$bp || 0,
            base: +dbAttack.gsx$base || 0,
            fire: +dbAttack.gsx$fire || 0,
            air: +dbAttack.gsx$air || 0,
            earth: +dbAttack.gsx$earth || 0,
            water: +dbAttack.gsx$water || 0,
            unique: false,
            id: id,
            cardId: "",
            name: dbAttack.gsx$name,
            chaoticId: dbAttack.gsx$id,
            cardImage: dbAttack.gsx$ic || ''
        };

        attackCards[id] = card;
    }

    const str = JSON.stringify(attackCards, undefined, 4);
    const code =
        'import { AttackCard, AttackId, CreatureCard, CreatureId, Tribe } from "../game/types/common.ts";\n\n' +
        `const Attacks: Record<AttackId, AttackCard> = ${str.split('\n').join('\n    ')};\n\n` +
        'export default Attacks;';

    Deno.writeTextFileSync(join(__dirname, '..', 'data', 'attacks.json').substring(1), str);
    Deno.writeTextFileSync(join(__dirname, '..', 'data', 'attacks.ts').substring(1), code);
}

function scrape_creatures() {
    const creaturesFromDB = db.collections.find(col => col.name === 'creatures')!.data as {
        "gsx$type": 'Creatures',
        "gsx$name": string,
        "gsx$set": string,
        "gsx$rarity": string,
        "gsx$id": CreatureId,
        "gsx$tribe": Tribe,
        /** String (number) */
        "gsx$courage": string,
        /** String (number) */
        "gsx$power": string,
        /** String (number) */
        "gsx$wisdom": string,
        /** String (number) */
        "gsx$speed": string,
        /** String (number) */
        "gsx$energy": string,
        /** String (number) */
        "gsx$mugicability": string,
        "gsx$elements": string,
        "gsx$types": string,
        // "gsx$ability": string,
        // "gsx$flavortext": string,
        // "gsx$brainwashed": "",
        // "gsx$unique": "",
        // "gsx$loyal": "",
        // "gsx$legendary": "",
        // "gsx$image": string,
        // "gsx$thumb": string,
        // "gsx$splash": string,
        // "gsx$artist": string,
        // "gsx$tags": "",
        // "gsx$exclusive": string,
        // "gsx$alt": "",
        // "gsx$alt2": "",
        // "gsx$animated": "",
        // "gsx$avatar": string,
        // "gsx$gender": string,
        /** Full Card Image */
        "gsx$ic": string,
        /** Card Art Image */
        "gsx$if": string,
        /** Croped image with space to the right?? */
        "gsx$ia": string,
    }[];


    const creatureCards: Record<CreatureId, CreatureCard> = {};

    for (const dbCreature of creaturesFromDB) {
        const id = guid();
        const elementsLs = dbCreature.gsx$elements.toLowerCase();
        const stats: CreatureCard['stats'] = {
            courage: +dbCreature.gsx$courage || 0,
          wisdom: +dbCreature.gsx$wisdom || 0,
          speed: +dbCreature.gsx$speed || 0,
          power: +dbCreature.gsx$power || 0,
          energy: +dbCreature.gsx$energy || 0,
          fire: elementsLs.indexOf('fire') > -1,
          water: elementsLs.indexOf('water') > -1,
          earth: elementsLs.indexOf('earth') > -1,
          air: elementsLs.indexOf('air') > -1
        };
        const card: CreatureCard = {
          tribe: dbCreature.gsx$tribe,
          stats,
          id,
          cardId: "",
          name: dbCreature.gsx$name,
          chaoticId: dbCreature.gsx$id,
          cardImage: dbCreature.gsx$ic || '',
          thumb: dbCreature.gsx$if || ''
        };
        creatureCards[id] = card;
    }

    // console.log(JSON.stringify(creatureCards));

    const str = JSON.stringify(creatureCards, undefined, 4);

    const code = 
    'import { AttackCard, AttackId, CreatureCard, CreatureId, Tribe } from "../game/types/common.ts";\n\n' +
    `const Creatures: Record<CreatureId, CreatureCard> = ${str.split('\n').join('\n    ')};\n\n` +
    'export default Creatures;';

    Deno.writeTextFileSync(join(__dirname, '..', 'data', 'creatures.json').substring(1), str);
    Deno.writeTextFileSync(join(__dirname, '..', 'data', 'creatures.ts').substring(1), code);
}

main();