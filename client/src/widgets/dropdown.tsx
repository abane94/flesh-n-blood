import './dropdown.css';


export const Dropdown = (props: { title: string; children: any }) => {

    return <>
        <div class="dropdown">
            <button class="dropbtn button">{props.title || 'Dropdown'}</button>
            <div class="dropdown-content">
                {/* <For each={props.destinations || []}>{
                    (label: string) => <button class="button stack" onclick={() => Actions.sendTo(props.config!, props.state!, label, props.index)}>{label}</button>
                }</For> */}
                {props.children}
            </div>
        </div>
    </>
}