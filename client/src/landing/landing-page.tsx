import type { Component } from 'solid-js';
import * as Global from '../global-state';
import { For, createSignal } from "solid-js";

const LandingPage: Component = () => {

    const [_name, _setName] = createSignal("");

    return (
        <article class="card">
            Hello {Global.name()}
            <div class="">
                <label class="" for="name">
                    Enter Name
                </label>
                <input
                    class=""
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    onChange={(e) => _setName(e.currentTarget.value)}
                />
                <button onClick={(e) => {
                    Global.setName(_name())
                }}>Enter</button>
            </div>
        </article>
    )
}

export default LandingPage;