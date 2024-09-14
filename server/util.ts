// import { CreatureCard, Deck } from "../game/types/common.ts";
import { shuffle } from "../game/util.ts";
// import { AttackCards } from "./db.ts";

export function guid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
