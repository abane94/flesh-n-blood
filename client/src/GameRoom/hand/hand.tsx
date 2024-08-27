import { For, JSX, Show, createResource, createSignal, Switch, Match } from "solid-js";
import './hand.css';
import { SpotState, Spot, DeckState } from "../../../../config";

interface Props {
    // state: SpotState | undefined;
    // config: Spot | undefined;
    // destinations: string[];
    // opponent: boolean | undefined;
    // cardBack: string;
    // index: number;
    cards: string[];
    rowHeight: number;
    onSelectCard: (state: SpotState, config: Spot, isOpponent: boolean, index: number) => void
}




export const Hand = (props: Props) => {
    const selectedIndex = createSignal<number>();

    const handState = (): DeckState => {
        return {
            type: "DECK",
            faceDown: false,
            counter: 0,
            cards: props.cards,
            notes: "",
        }
    };

    const spot = (): Spot => ({
        type: "DECK",
        label: 'Hand',
        drawable: false,
        searchable: false,
        horizontalStack: false,
    });

    const clickCard = (i: number) => {
        props.onSelectCard(handState(), spot(), false, i)
    }

    // const spot

    return <>
        <div class="hand-container">
            <div class="hand-cards">
                {/* this is my hand */}

                <For each={props.cards || []}>
                    {
                        (card, idx) =>
                            <div onClick={() => clickCard(idx())} data-tooltip="hand" class={"card-cell tooltip-top"} style={{ "height": `${props.rowHeight - 5}px` }}>
                                <div class="game-card">
                                    <img class="game-card-img" src={card}></img>
                                </div>
                                {/* <div class="game-card-label">{props.cell.label}</div> */}
                            </div>
                    }
                </For>

            </div>
        </div>
    </>
}