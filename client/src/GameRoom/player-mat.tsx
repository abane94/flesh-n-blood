import { For, JSX, Show, Switch, createResource, Match } from "solid-js";
import { DeckState, FleshBloodLayout, GameLayoutConfig, PlayerState, SingleSpot, SingleSpotState, Spot } from '../../../config';
import './player-mat.css';
import { Deck } from "../../../config.ts";
import { Dynamic } from "solid-js/web";


// interface CellPropsBase {
//     rowHeight: number;
//     idx: number;
//     cardBack: string;
// }

// interface SingleCellProps extends CellPropsBase {
//     cell: SingleSpot;
//     data: SingleSpotState;
// }
// interface DeckCellProps extends CellPropsBase {
//     cell: Deck;
//     data: DeckState
// }

// type CellProps = SingleCellProps | DeckCellProps;

export interface CellProps {
    // idx: number;
    rowNum: number;
    cellIdx: number;
    cell: Spot;
    opponent?: true
}

interface Props {
    layout: GameLayoutConfig;
    rowHeight: number;
    opponent?: true;
    // playerState: PlayerState
    cardComponent: (props: CellProps) => JSX.Element
}

export const PlayerMat = (props: Props) => {
    // const windowHeight = window.innerHeight;
    // const rows = FleshBloodLayout.rows.length * 2;
    // const rowHeight = Math.floor(windowHeight / rows);
    // console.log(`row height: ${rowHeight}`);

    const getTooltipClass = (opponent: boolean, rowNum: number, rowCount: number, colNum: number, colCount: number): string => {
        if (colNum >= (colCount - 1)) {
            return 'tooltip-left'
        }

        if (!opponent && rowNum >= (rowCount - 1)) {
            return 'tooltip-top';
        }
        return '';
    };


    return <>
        <div class={'player-mat ' + (props.opponent ? 'opponent' : '')}>
            <For each={FleshBloodLayout.rows}>{(row, i) =>

                <div class={"game-row justify-content__" + row.flex} style={{ "height": `${props.rowHeight}px`, 'background-color': row.backgroundColor || 'transparent' }}>
                    <For each={row.cells}>{(cell, j) =>

                        // <Switch fallback={<div class="cell">Invalid Cell</div>}>
                        //     <Match when={cell.type === 'DECK' && cell.horizontalStack}>
                        //         <For each={(cell as Deck).}
                        //     </Match>
                        //     <Match when={cell.type === 'SPOT' || !cell.horizontalStack}>
                        //         <div class="cell">
                        //             <Dynamic component={props.cardComponent} cell={cell} rowHeight={props.rowHeight} idx={i()}></Dynamic>
                        //         </div>
                        //     </Match>
                        // </Switch>

                        // classList={{ 'tooltip-left': !props.opponent && (i() === row.cells.length - 1), 'tooltip-top': j() === FleshBloodLayout.rows.length - 1 }}

                        <div class={'cell ' + getTooltipClass(!!props.opponent, i(), FleshBloodLayout.rows.length, j(), row.cells.length)} data-row={i()} data-cell={j()} data-tooltip={cell.label} >
                            <Dynamic component={props.cardComponent} cell={cell} rowHeight={props.rowHeight} rowNum={i()} cellIdx={j()} opponent={props.opponent}></Dynamic>
                        </div>
                    }</For>
                </div>
            }</For>
        </div>
    </>
}

// interface CellPropsBase {
//     rowHeight: number;
//     idx: number;
//     cardBack: string;
// }

// interface SingleCellProps extends CellPropsBase {
//     cell: SingleSpot;
//     data: SingleSpotState;
// }
// interface DeckCellProps extends CellPropsBase {
//     cell: Deck;
//     data: DeckState
// }

// type CellProps = SingleCellProps | DeckCellProps;

// const CellComponent = (props: CellProps) => {
//     const image = props.data.faceDown
//         ? props.cardBack
//         : props.cell.type === 'DECK' ? (props.data as DeckState).cards[0] : (props.data as SingleSpotState).card

//     return <>
//         <div class="card-cell" style={{ "height": `${props.rowHeight - 3}px` }}>
//             <div class="game-card">
//                 <img class="game-card-img" src={image || props.cardBack}></img>
//             </div>
//             <div class="game-card-label">{cell.label}</div>
//         </div>
//     </>

// }