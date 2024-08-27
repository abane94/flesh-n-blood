import { createSignal, createResource, Resource } from "solid-js";
import { CreatureCard } from '../../game/types/common';
import { apiBaseRoute } from "./config";

const fetchUser = async () =>
  (await (await fetch(`${apiBaseRoute}data/creatures`)).json()).creatures;


const [creatureCards] = createResource<CreatureCard[]>(fetchUser);

export const OverwordCards = () => {
  return (creatureCards() || []).filter(c => {
    return c.tribe === 'OverWorld';
  })
}

export const UnderWorldCards = () => {
  return (creatureCards() || []).filter(c => c.tribe === 'UnderWorld')
}

export const DanianCards = () => {
  return (creatureCards() || []).filter(c => c.tribe === 'Danian')
}

export const MipedianCards = () => {
  return (creatureCards() || []).filter(c => c.tribe === 'Mipedian')
}

export const MarrillianCards = () => {
  return (creatureCards() || []).filter(c => c.tribe === 'M\'arrillian')
}

export const TriblessCards = () => {
  return (creatureCards() || []).filter(c => c.tribe === 'Generic')
}

// ------------------------------------------------------

// import { createContext, useContext } from "solid-js";
// import { Show } from "solid-js/web";

// const CreatureContext = createContext<[Resource<CreatureCard[]>, { overworld(): CreatureCard[] }]>();
// const Provider = CreatureContext.Provider;

// export function CreatureProvider(props: any) {
//   const [count, setCount] = createSignal(props.count || 0);
//   const [creatureCards] = createResource<CreatureCard[]>(fetchUser);
//   const creature = [
//     creatureCards,
//     {
//       overworld() {
//         const cards = creatureCards()
//         creatureCards.loading ? [] : cards;
//       },
//       decrement() {
//         // setCount(c => c - 1);
//       }
//     }
//   ];

//   return (
//     <Provider value={creature} >
//       <Show when={!creatureCards.loading}>
//         {props.children}
//       </Show>
//     </Provider>
//   );
// }

// export function useCreatures() { return useContext(CreatureContext); }