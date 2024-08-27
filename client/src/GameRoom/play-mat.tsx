import { For, JSX, Show, createResource, createSignal, Switch, Match, createEffect } from "solid-js";
import { FleshBloodLayout, Spot, SpotState } from '../../../config';
import './play-mat.css';
import { CellProps, PlayerMat } from "./player-mat";
import { LobbyGame } from "../../../server/lobby-types";
import { gameState as GlobalGameState, isPlayer0, userId } from "../global-state";
import { Deck, DeckState, SingleSpotState } from "../../../config.ts";
import { DetailPane } from "./detail-pane";
import { Hand } from "./hand/hand";
import { PlayerData } from "../../../game/types/game";


export const PlayMat = () => {
    const windowHeight = window.innerHeight;
    const rows = FleshBloodLayout.rows.length * 2 + 1; // * 2 for both players, + 1 for hand
    const rowHeight = Math.floor(windowHeight / rows);
    console.log(`row height: ${rowHeight}`);

    const destinations = FleshBloodLayout.rows.map(row => {
        return row.cells.filter(cell => cell.destination)
    }).flat().map(row => row.label);
    console.log(destinations);

    // TODO: move to global state
    const [layout] = createSignal(FleshBloodLayout);
    // const [myState, setMyState] = createSignal<LobbyGame>();
    // NOTE: just commented out above in favor of below
    const [myData, setMyData] = createSignal<PlayerData>();
    const [opponentData, setOpponentData] = createSignal<PlayerData>();

    // const myHand = () => {
    //     return myState()?.game[isPlayer0() ? 'player0Data' : 'player1Data']?.hand;
    // }

    const [myHand, setMyHand] = createSignal<string[]>([]);


    // const myState = () => {
    //     const _gameState = gameState()
    //     return _gameState?.game.player0 === userId() ? _gameState?.game.player0Data?.state : _gameState?.game.player1Data?.state
    // }
    createEffect(() => {
        // setMyState(GlobalGameState());
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
            console.log('new data');
            // return myState()?.game[isPlayer0() ? 'player0Data' : 'player1Data']?.state[props.cell.label];
            return props.opponent ? opponentData()?.state[props.cell.label]
                : myData()?.state[props.cell.label];
        };
        const image = () => data()?.faceDown
            ? layout().cardBack
            : props.cell.type === 'DECK' ? ((data() as DeckState)?.cards[0] || layout().cardBack) : (data() as SingleSpotState)?.card

        return <>
            <Switch fallback={<div class="cell">Invalid Cell</div>}>
                <Match when={props.cell.type === 'DECK' && props.cell.horizontalStack}>
                    <For each={(data() as DeckState)?.cards || []}>
                        {
                            (card, idx) =>
                                <div data-tooltip={props.cell.label} class={"card-cell " + (props.cell.label === selectedCellConfig()?.label && !!props.opponent === !!isSelectedOpponent() ? 'selected' : '')} style={{ "height": `${rowHeight - 5}px` }}>
                                    <div class="game-card" onclick={() => selectCard(data()!, props.cell, !!props.opponent, idx)}>
                                        <img class="game-card-img" src={data()?.faceDown ? layout().cardBack : card}></img>
                                    </div>
                                    {/* <div class="game-card-label">{props.cell.label}</div> */}
                                </div>
                        }
                    </For>
                </Match>
                <Match when={props.cell.type === 'SPOT' || !props.cell.horizontalStack}>
                    <div class={"card-cell " + (props.cell.label === selectedCellConfig()?.label && !!props.opponent === !!isSelectedOpponent() ? 'selected' : '')} style={{ "height": `${rowHeight - 5}px` }} onclick={() => selectCard(data()!, props.cell, !!props.opponent)}>
                        <div class="game-card">
                            <Show when={image() || !props.cell.hidePlaceholder}>
                                <img class="game-card-img" src={image() || layout().cardBack}></img>
                            </Show>
                        </div>
                        {/* <div class="game-card-label">{props.cell.label}</div> */}
                    </div>
                </Match>
            </Switch>


            {/* <div class="card-cell" style={{ "height": `${rowHeight - 3}px` }}>
                <div class="game-card">
                    <Show when={image || !props.cell.hidePlaceholder}>
                        <img class="game-card-img" src={image || layout().cardBack}></img>
                    </Show>
                </div>
                <div class="game-card-label">{props.cell.label}</div>
            </div> */}
        </>
    }


    return <>
        {/* <div class="play-mat opponent">
            <For each={FleshBloodLayout.rows}>{(row, i) =>
                <div class="game-row" style={{ "max-height": `${rowHeight}px` }}>
                    <For each={row.cells}>{(cell, i) =>
                        <div class="card-cell" style={{ "height": `${rowHeight - 3}px` }}>
                            <div class="game-card">
                                <img class="game-card-img" src="https://dhhim4ltzu1pj.cloudfront.net/media/images/back4.width-300.format-webp.webp"></img>
                            </div>
                            <div class="game-card-label">{cell.label}</div>
                        </div>
                    }</For>
                </div>
            }</For>
        </div> */}
        <div class="play-mat">
            <div class="player-mats">
                <PlayerMat layout={layout()} rowHeight={rowHeight} cardComponent={CellComponent} opponent={true}></PlayerMat>{/* playerState={myState()!}  */}
                <PlayerMat layout={layout()} rowHeight={rowHeight} cardComponent={CellComponent}></PlayerMat>{/* playerState={myState()!}  */}
                <Hand cards={myHand()} rowHeight={rowHeight} onSelectCard={selectCard}></Hand>
            </div>
            <div class="details">
                <DetailPane state={selectedCardState()} config={selectedCellConfig()} destinations={destinations} opponent={isSelectedOpponent()} cardBack={FleshBloodLayout.cardBack} index={selectedIndex()}></DetailPane>
            </div>

        </div>

    </>
}