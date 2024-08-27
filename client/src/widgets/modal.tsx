import { createSignal, JSX } from "solid-js"
import { Dynamic } from "solid-js/web";

export const [isModalOpen, setIsModalOpen] = createSignal(false);
export const [modalComponent, setModalComponent] = createSignal<() => JSX.Element>()


export const Modal = () => {

    const close = () => {
        setIsModalOpen(false);
        setModalComponent();
    }

    return (
        <div class="modal">
            <input id="modal_1" type="checkbox" checked={isModalOpen()} />
            <label for="modal_1" class="overlay"></label>
            <article>
                <header>
                    <h3>Alert</h3>
                    <label for="modal_1" class="close">&times;</label>
                </header>
                <Show when={modalComponent()} fallback="No modal content">
                    <Dynamic component={modalComponent()} />
                </Show>
                <footer>
                    <a class="button" href="#">See offer</a>
                    <label for="modal_1" class="button dangerous" onclick={close}>
                        Cancel
                    </label>
                </footer>
            </article>
        </div>
    )
}