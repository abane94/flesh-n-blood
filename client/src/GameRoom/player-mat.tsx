import { For, JSX, Show, Switch, createResource, Match } from "solid-js";
import { DeckState, FleshBloodLayout, GameLayoutConfig, PlayerState, SingleSpot, SingleSpotState, Spot } from '../../../config';
import './player-mat.css';
// import { Deck } from "../../../config.ts";
import { Dynamic } from "solid-js/web";

export interface CellProps {
    rowNum: number;
    cellIdx: number;
    cell: Spot;
    opponent?: true
}

interface Props {
    layout: GameLayoutConfig;
    rowHeight: number;
    opponent?: true;
    cardComponent: (props: CellProps) => JSX.Element
}

export const PlayerMat = (props: Props) => {
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
                        <div class={'cell ' + (cell.horizontalStack ? 'horizontal ' : '') + getTooltipClass(!!props.opponent, i(), FleshBloodLayout.rows.length, j(), row.cells.length)} data-row={i()} data-cell={j()} data-tooltip={cell.label} >
                            <Dynamic component={props.cardComponent} cell={cell} rowHeight={props.rowHeight} rowNum={i()} cellIdx={j()} opponent={props.opponent}></Dynamic>
                        </div>
                    }</For>
                </div>
            }</For>
        </div>
    </>
}