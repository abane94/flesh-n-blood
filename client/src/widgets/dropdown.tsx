import './dropdown.css';


export const Dropdown = (props: { title: string; children: any }) => {

    return <>
        <div class="dropdown">
            <button class="dropbtn button">{props.title || 'Dropdown'}</button>
            <div class="dropdown-content">
                {props.children}
            </div>
        </div>
    </>
}