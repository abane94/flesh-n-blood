import { For, JSX, Show, createResource, createSignal, Switch, Match, createEffect, onMount, onCleanup } from "solid-js";
import './log-pane.css'
import { Spot, SpotState } from "../../../config";
import { gameState } from "../../global-state.ts";

interface Props {
    windowHeight: number;
}

export const LogPane = (props: Props) => {
    const [log, setLog] = createSignal<string[]>([]);
    let el: HTMLDivElement;
    let bottomEl: HTMLElement;

    createEffect(() => {
        // console.log('------------------------------')
        const globalLog = gameState().log;
        // console.log(globalLog);
        // console.log(el.scrollTop);
        // console.log(el.scrollHeight);
        // console.log('----------')
        const initalPos = el.scrollTop;
        setLog([...globalLog]);
        // console.log(el.scrollTop);
        // console.log(el.scrollHeight);
        // console.log('------------------------------')
        el.scrollTop = el.scrollHeight;
        bottomEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
        bottomEl.scrollIntoView(true);

    });


    onMount(() => {
        if (el) {
            console.log('el is populated on mount');
        }
        el.addEventListener('scroll', handleScroll);
    });

    onCleanup(() => {
        el.removeEventListener('scroll', handleScroll);
    });

    const handleScroll = (event: any) => {
        console.log(event.target);

        if (event.target === el) {
            console.log(event);
        }
    };


    return <>
        <div class="detail-pane">
            <div ref={el} class="event-log" style={{ 'max-height': `${props.windowHeight - 10}px` }}>
                <For each={log()}>{
                    (logItem: string) => <div class="log-event">
                        {logItem}
                    </div>
                }</For>
                <div ref={bottomEl}><br />...</div>
            </div>
        </div>

    </>
}