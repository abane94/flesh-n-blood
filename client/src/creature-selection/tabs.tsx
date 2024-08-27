import { createSignal, Suspense, Switch, Match, useTransition } from "solid-js";
import { render } from "solid-js/web";
// import Child from "./child";

// import "./styles.css";
import CreatureList from "./creature-list";
import { DanianCards, MarrillianCards, MipedianCards, OverwordCards, TriblessCards, UnderWorldCards } from "../creatures";
// import { DanianCards, MarrillianCards, MipedianCards, OverwordCards, TriblessCards, UnderWorldCards } from "../creatures";

const Tabs = () => {
    const [tab, setTab] = createSignal(0);
    const [pending, start] = useTransition();
    const updateTab = (index: number) => () => start(() => setTab(index));
    return (
        <div class="">
            <div class="">
                <ul class="">
                    <li class="button" classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                        OverWorld
                    </li>
                    <li class="button" classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                        UnderWorld
                    </li>
                    <li class="button" classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
                        Danian
                    </li>
                    <li class="button" classList={{ selected: tab() === 3 }} onClick={updateTab(3)}>
                        Mipedian
                    </li>
                    <li class="button" classList={{ selected: tab() === 4 }} onClick={updateTab(4)}>
                        M\'arrillian
                    </li>
                    <li class="button" classList={{ selected: tab() === 5 }} onClick={updateTab(5)}>
                        Generic
                    </li>
                </ul>
            </div>
            <div class="" classList={{ pending: pending() }}>
                <Suspense fallback={<div class="loader">Loading...</div>}>
                    <Switch>
                        <Match when={tab() === 0}>
                            {/* <Child page="Uno" /> */}
                            <CreatureList cards={OverwordCards()} />
                        </Match>
                        <Match when={tab() === 1}>
                            <CreatureList cards={UnderWorldCards()} />
                        </Match>
                        <Match when={tab() === 2}>
                            <CreatureList cards={DanianCards()} />
                        </Match>
                        <Match when={tab() === 3}>
                            <CreatureList cards={MipedianCards()} />
                        </Match>
                        <Match when={tab() === 4}>
                            <CreatureList cards={MarrillianCards()} />
                        </Match>
                        <Match when={tab() === 5}>
                            <CreatureList cards={TriblessCards()} />
                        </Match>
                    </Switch>
                </Suspense>
            </div>
        </div>
    );
};

export default Tabs;