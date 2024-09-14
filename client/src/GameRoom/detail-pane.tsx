import { For, JSX, Show, createResource, createSignal, Switch, Match } from "solid-js";
import './detail-pane.css'
import { Spot, SpotState } from "../../../config";
import * as Actions from './detail-pane/actions';

interface Props {
    state: SpotState | undefined;
    config: Spot | undefined;
    destinations: string[];
    opponent: boolean | undefined;
    cardBack: string;
    index: number;
}


export const DetailPane = (props: Props) => {


    return <>
        <div class="detail-pane">
            <div class="event-log">

            </div>

            <h3>{props.config?.label}</h3>

            <Show when={props.config}>
                <Show when={props.config?.counter && (props.opponent ? !props.state?.faceDown : true)}>
                    <div class="counter">
                        <input disabled={props.opponent} onChange={evt => Actions.setCounter(props.config!, props.state!, +evt.target.value)} type="number" value={props.state?.counter || props.config?.counter?.start || 0} min={props.config?.counter?.min} max={props.config?.counter?.max} step={props.config?.counter?.step}></input>
                    </div>
                </Show>
                <Show when={!props.opponent}>
                    <div class="notes">
                        <textarea onChange={evt => Actions.setNotes(props.config!, props.state!, evt.target.value)}>{props.state?.notes || ''}</textarea>
                    </div>
                </Show>

            </Show>



            <div class="card-details">
                <Show when={props.config}>
                    <Show when={!props.opponent} fallback={
                        <img src={props.state?.faceDown ? props.cardBack : props.state?.type === 'DECK' ? props.state.cards[0] : props.state?.card} />
                    }>
                        <div class="dropdown">
                            <button class="dropbtn">{props.config?.label === 'Hand' ? 'Play To...' : 'Send To...'}</button>
                            <div class="dropdown-content">
                                <For each={props.destinations || []}>{
                                    (label: string) => <button class="button stack" onclick={() => Actions[props.config?.label === 'Hand' ? 'playCard' : 'sendTo'](props.config!, props.state!, label, props.index)}>{label}</button>
                                }</For>
                            </div>
                        </div>
                        <Show when={props.config?.flipable}>
                            <button onclick={() => Actions.flip(props.config!, props.state!)}>Flip</button>
                        </Show>
                        <Show when={props.config?.type === 'DECK' && props.config.drawable}>
                            <button onclick={() => Actions.draw(props.config!, props.state!)}>Draw</button>
                        </Show>
                        <Show when={props.config?.type === 'DECK' && props.config.searchable}>
                            <button onclick={() => Actions.search(props.config!, props.state!)}>Search</button>
                        </Show>

                        <img src={props.state?.faceDown ? props.cardBack : props.state?.type === 'DECK' ? props.state.cards[0] : props.state?.card} />
                    </Show>
                </Show>
            </div>
        </div>

    </>
}