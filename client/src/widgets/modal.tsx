import { createSignal, JSX, createEffect } from "solid-js"
import { Dynamic } from "solid-js/web";

interface ButtonConfig {
    text: string;
    action: () => void;
}
interface ModalConfig {
    title: string;
    // rightButtons: ButtonConfig[];
    // leftButtons: ButtonConfig[];
}

export const [isModalOpen, setIsModalOpen] = createSignal(false);
export const [modalComponent, setModalComponent] = createSignal<() => JSX.Element>();

export const [setConfig, modalConfig] = createSignal<ModalConfig>({
    title: 'Modal',
    // rightButtons: [],
    // leftButtons: []
});

export function setModalConfig(config: Partial<ModalConfig>) {
    setConfig(Object.assign({}, modalConfig(), config));
}


export const Modal = () => {

    const close = () => {
        setIsModalOpen(false);
        setModalComponent();
    }

    createEffect(() => {
        if (!isModalOpen()) {
            var mods = document.querySelectorAll('.modal > [type=checkbox]');
            [].forEach.call(mods, function (mod) { mod.checked = false; });
        }
    });

    const title = () => {
        return modalConfig()?.title || 'title';
    }

    return (
        <div class="modal">
            <input id="modal_1" type="checkbox" checked={isModalOpen()} />
            <label for="modal_1" class="overlay"></label>
            <article>
                <header>
                    <h3>{title()}</h3>
                    <label for="modal_1" class="close">&times;</label>
                </header>
                <Show when={modalComponent()} fallback="No modal content">
                    <Dynamic component={modalComponent()} />
                </Show>
                <footer>
                    {/* <a class="button" href="#">See offer</a>
                    <label for="modal_1" class="button dangerous" onclick={close}>
                        Cancel
                    </label> */}
                </footer>
            </article>
        </div>
    )
}