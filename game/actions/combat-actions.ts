import { type TaggedUnion, createHelperFunctions } from 'npm:ts-tagged-union@1.1.1';
import { AttackCard, AttackId, CardId, Creature, Player, PlayerId } from "../types/common.ts";
import { parseSigned } from "https://deno.land/x/hono@v3.11.4/utils/cookie.ts";
import { BaseEvent, GameState } from "../types/game.ts";

interface CombatActionsEnum {
    draw: {},
    playAttack: { attacker: Creature, attack: AttackCard, target: CardId },
    // playSpell: { spellId: SpellId },
    // end
    pass: {}
}
export type CombatActionsKeys = keyof CombatActionsEnum;
export type CombatActions = TaggedUnion<CombatActionsEnum, '__tag'>;
  
// Get helper functions for the type
export const CombatActions = createHelperFunctions<CombatActions>('__tag')

/*
```

                     |  draw(I)         | draw(D)          | playAttack(I)         | playAttack(D)         | pass(I) | pass(D)

init                 | initiatorPlaying |       -          |         -             |            -          |    -    | -    
initiatorPlaying     | -                |  -               |  initiatorJustPLayed  |  -                    |   -     |     -
defenderPlaying      | -                |  -               |       -               |  defenderJustPlayed   |   -     |     -
initiatorJustPLayed  | -                | defenderPlaying  |     -                 |          -            |    -    |     -
defenderJustPlayed   | initiatorPlaying |       -          |         -             |            -          |    -    | -
initiatorJustPassed  |
defenderJustPassed   |
```
*/

// burst action will only be valid in initiatorPlaying or defenderPlaying state


interface CombatEventEnum extends BaseEvent {  // all events should includes the new GameState (should it be combatstate??)
    // update: { state: GameState };
    CombatOver: { winner: Player, state: GameState };
}
export type CombatEventKeys = keyof CombatEventEnum;
export type CombatEvent = TaggedUnion<CombatEventEnum, '__tag'>;
export const CombatEvent = createHelperFunctions<CombatEvent>('__tag');