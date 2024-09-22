import { For, JSX, Show, createResource, createSignal, Switch, Match, createEffect } from "solid-js";
import { FleshBloodLayout, Spot, SpotState } from '../../../config';
import './play-mat.css';
import { CellProps, PlayerMat } from "./player-mat";
// import { LobbyGame } from "../../../server/lobby-types";
import { gameState as GlobalGameState, isPlayer0, userId } from "../global-state";
import { Deck, DeckState, SingleSpotState } from "../../../config.ts";
import { DetailPane } from "./detail-pane";
import { Hand } from "./hand/hand";
import { PlayerData } from "../../../game/types/game";
import Split from 'split.js';
import { LogPane } from "./log-pane/log-pane.tsx";


export const PlayMat = () => {
    const windowHeight = window.innerHeight;
    const rows = FleshBloodLayout.rows.length * 2 + 1; // * 2 for both players, + 1 for hand
    const rowHeight = Math.floor(windowHeight / rows);
    console.log(`row height: ${rowHeight}`);

    const cardWidth = Math.ceil(rowHeight * FleshBloodLayout.widthRatio);
    console.log(`cardWidth: ${cardWidth}`);

    const destinations = FleshBloodLayout.rows.map(row => {
        return row.cells.filter(cell => cell.destination)
    }).flat().map(row => row.label);
    const deckDestinations = FleshBloodLayout.rows.map(row => {
        return row.cells.filter(cell => cell.destination)
    }).flat().filter(row => row.type === 'DECK').map(row => row.label);
    console.log(destinations);

    // TODO: move to global state
    const [layout] = createSignal(FleshBloodLayout);
    // const [myState, setMyState] = createSignal<LobbyGame>();
    // NOTE: just commented out above in favor of below
    const [myData, setMyData] = createSignal<PlayerData>();
    const [opponentData, setOpponentData] = createSignal<PlayerData>();


    const [myHand, setMyHand] = createSignal<string[]>([]);
    createEffect(() => {
        setMyData(GlobalGameState()?.game[isPlayer0() ? 'player0Data' : 'player1Data']);
        setOpponentData(GlobalGameState()?.game[isPlayer0() ? 'player1Data' : 'player0Data'])
        setMyHand(GlobalGameState()?.game[isPlayer0() ? 'player0Data' : 'player1Data']?.hand || []);
    })

    const [selectedCardState, setSelectedCardState] = createSignal<SpotState>();
    const [selectedCellConfig, setSelctedCellConfig] = createSignal<Spot>();
    const [isSelectedOpponent, setIsSelectedOpponent] = createSignal(false);
    const [selectedIndex, setSelectedIndex] = createSignal(0);

    const selectCard = (state: SpotState, config: Spot, isOpponent: boolean, index = 0) => {
        setSelectedCardState(state);
        setSelctedCellConfig();
        setSelctedCellConfig(config);
        setIsSelectedOpponent(isOpponent);
        setSelectedIndex(index);
    }


    const CellComponent = (props: CellProps) => {

        const data = () => {
            // console.log('new data');
            return props.opponent ? opponentData()?.state[props.cell.label]
                : myData()?.state[props.cell.label];
        };
        const cardImgStr = () => (props.cell.type === 'DECK' ? ((data() as DeckState)?.cards[0]) : (data() as SingleSpotState)?.card) || null;
        const image = () => data()?.faceDown
            ? layout().cardBack
            : cardImgStr()

        return <>
            <Switch fallback={<div class="cell">Invalid Cell</div>}>
                <Match when={props.cell.type === 'DECK' && props.cell.horizontalStack}>
                    <For each={(data() as DeckState)?.cards || []}>
                        {
                            (card, idx) =>
                                <div data-tooltip={props.cell.label} class={"card-cell " + (props.cell.label === selectedCellConfig()?.label && !!props.opponent === !!isSelectedOpponent() ? 'selected' : '')} style={{ "height": `${rowHeight - 5}px` }}>
                                    <div style={{ width: `${cardWidth}px` }} class="game-card" onclick={() => selectCard(data()!, props.cell, !!props.opponent, idx)}>
                                        <img class="game-card-img" src={data()?.faceDown ? layout().cardBack : card}></img>
                                    </div>
                                    {/* <div class="game-card-label">{props.cell.label}</div> */}
                                </div>
                        }
                    </For>
                </Match>
                <Match when={props.cell.type === 'SPOT' || !props.cell.horizontalStack}>
                    <div class={"card-cell " + (props.cell.label === selectedCellConfig()?.label && !!props.opponent === !!isSelectedOpponent() ? 'selected' : '')} style={{ "height": `${rowHeight - 5}px` }} onclick={() => selectCard(data()!, props.cell, !!props.opponent)}>
                        <div class="game-card" style={{ width: `${cardWidth}px` }}>
                            <Show when={image()}>
                                <img class="game-card-img" src={image() || layout().cardBack}></img>
                            </Show>
                        </div>
                        {/* <div class="game-card-label">{props.cell.label}</div> */}
                    </div>
                </Match>
            </Switch>
        </>
    }

    createEffect(() => {
        const windowWidth = window.innerWidth;
        // const split = Split(['#game-pane', '#detail-pane'])
        const sizesKey = localStorage.getItem('split-sizes');
        let sizes: number[];
        if (sizesKey) {
            sizes = JSON.parse(sizesKey)
        } else {
            sizes = [20, 80, 20];
        }

        const split = Split(['#log-pane', '#game-pane', '#detail-pane'], {
            sizes,
            maxSize: [800, Infinity, 800],
            minSize: [50, 800, 100],
            onDragEnd: function (newSizes: number[]) {
                localStorage.setItem('split-sizes', JSON.stringify(newSizes))
            },
        })
    });


    return <>
        <div class="play-mat">
            <div id="log-pane">
                <LogPane windowHeight={windowHeight} />
            </div>
            <div id="game-pane" class="player-mats">
                <Show when={opponentData()} fallback={<div>Waiting for player 2</div>}>
                    <PlayerMat layout={layout()} rowHeight={rowHeight} cardComponent={CellComponent} opponent={true}></PlayerMat>{/* playerState={myState()!}  */}
                    <PlayerMat layout={layout()} rowHeight={rowHeight} cardComponent={CellComponent}></PlayerMat>{/* playerState={myState()!}  */}
                    <Hand cards={myHand()} rowHeight={rowHeight} onSelectCard={selectCard}></Hand>
                </Show>
            </div>
            <div id="detail-pane" class="details">
                <DetailPane state={selectedCardState()} config={selectedCellConfig()} destinations={destinations} deckDestinations={deckDestinations} opponent={isSelectedOpponent()} cardBack={FleshBloodLayout.cardBack} index={selectedIndex()}></DetailPane>
            </div>

        </div>

    </>
}