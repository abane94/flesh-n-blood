import { For, Show, createResource, createSignal } from "solid-js";
import { FleshBloodLayout, getConfigObject, Spot } from '../../../config.ts';
import './deck-init.css';
import { deckData, setDeckData } from "../global-state";
import { Dropdown } from "../widgets/dropdown";
import { setIsModalOpen, setModalComponent, setModalConfig } from "../widgets/modal";

const KEYS = {
    deckList: 'DeckList'
}


export const GameInitScreen = () => {
    let inputField: HTMLElement;
    let inputTextArea: HTMLElement;
    const windowHeight = (window.innerHeight) * 0.8;

    const [deckList, setDeckList] = createSignal<string[]>(JSON.parse(localStorage.getItem(KEYS.deckList) || '[]'));
    const [deckName, setDeckName] = createSignal('');

    const rows = FleshBloodLayout.rows.length;

    const configObject = getConfigObject(FleshBloodLayout);

    const rowHeight = Math.floor(windowHeight / rows);

    console.log(`row height: ${rowHeight}`);

    let [inputCellLabel, setInputCellLabel] = createSignal<string | null>(null);
    let [inputCell, setInputCell] = createSignal<Spot | null>(null);
    const [data, setData] = createSignal<Record<string, string>>({});

    const clickSpot = (cell: Spot) => {
        if (!cell.initializable) { return; }
        setInputCell(cell);
        setInputCellLabel(cell.label);
    }

    const saveSpot = () => {
        const cell = inputCell();
        if (cell?.type === 'DECK') {
            setData({
                ...data(),
                [cell.label]: inputTextArea.value?.split('\n')
            })
        } else if (cell?.type === 'SPOT') {
            setData({
                ...data(),
                [cell.label]: inputField.value
            })
        }
        setInputCell(null);
    }

    const continueWithDeck = () => {
        setDeckData(data());
    }

    const saveDeck = async () => {
        const name = await prompt('Enter a deck name', deckName()) || '';
        if (name) {
            if (!deckList().includes(name)) {
                setDeckList([
                    ...deckList(),
                    name
                ]);
                localStorage.setItem(KEYS.deckList, JSON.stringify((deckList())));
            }
            localStorage.setItem(name, JSON.stringify(data()));
        }

    }

    const loadDeck = async (name: string) => {
        setDeckName(name);
        try {
            const deckData = JSON.parse(localStorage.getItem(name)!);
            setData(deckData);
        } catch (e) {
            console.warn('Could not load deck');
        }
    }

    const exportData = () => {
        setIsModalOpen(false);
        setModalConfig({ title: 'Export' });
        const baseData: Record<string, string | string[]> = {};
        for (const key of Object.keys(configObject).sort((k1, k2) => configObject[k2].type.localeCompare(configObject[k1].type))) {
            const cell: Spot = configObject[key];
            if (cell.initializable) {
                baseData[key] = cell.type == 'DECK' ? [] : '';
            }
        }
        const json = JSON.stringify(Object.assign(baseData, data()), undefined, 4);
        setExportDataStr(json);
        setModalComponent(() => exportDisplay);
        setIsModalOpen(true);
    }

    const openImportModal = () => {
        setIsModalOpen(false);
        setModalConfig({ title: 'Import' });
        setModalComponent(() => importDisplay);
        setIsModalOpen(true);
    }

    const importData = (json?: string) => {
        if (!json) {
            json = prompt('Paste deck data');
        }
        if (json) {
            try {
                const newData = {}
                const importedData = JSON.parse(json);
                console.log(importedData)
                if (importedData) {
                    const error = validateImportData(importedData);
                    if (error) {
                        alert('Could not import data:\n' + error);
                        return;
                    }
                    const existingFields = Object.keys(data());
                    setData(Object.assign(importedData, data()));
                    const existingStr = existingFields.length ? '\nThe following fields had existing data, and were not overwritten but the import\n'
                        + existingFields.join('\n')
                        : '';
                    alert('Data imported' + existingStr);
                }
            } catch (e) {
                alert('Could not parse import: ' + e);
            }
        } else {
            alert('No import data provided');
        }
    }

    const validateImportData = (data: Record<string | number, any>) => {
        if (typeof data !== 'object') {
            return 'Data not an object';
        }
        for (const key of Object.keys(data)) {
            const val = data[key];
            const config = configObject[key];
            if (!config) {
                console.warn('Invalid spot: ' + key);
                continue;
            }
            if (config.type === 'DECK') {
                if (!Array.isArray(val)) {
                    return 'Invalid type, expected an array for ' + key;
                }
                if ((val as Array<any>).every(el => typeof el === 'string')) {
                    continue;
                }
                return 'Invalid type, expected an array of only strings for ' + key;
            } else if (config.type === 'SPOT') {
                if (typeof val === 'string') {
                    continue;
                }
                return 'Invalid type, expected string for ' + key;
            }
        }
        return;
    }

    const [exportDataStr, setExportDataStr] = createSignal<string>();

    const exportDisplay = () => {
        return (
            <section class="content">
                {/* <code>
                    {exportDataStr()}
                </code> */}
                <textarea readonly class="deck-init__export-textarea" value={exportDataStr()}></textarea>
            </section>
        )
    }

    const importDisplay = () => {
        let textArea;
        return (
            <section class="content">
                <textarea ref={textArea}></textarea>
                <button onclick={() => importData(textArea.value)}>Import</button>
            </section>
        )
    }


    return <>
        <div class="deck-init-screen">
            <div class="deck-init-layout">
                <div class="deck-init__toolbar">
                    <Show when={deckList().length}>
                        <Dropdown title="Load Deck">
                            <For each={deckList()}>
                                {(name, i) => <div><button onclick={() => loadDeck(name)}>
                                    {name}
                                </button></div>}
                            </For>
                        </Dropdown>
                    </Show>
                    <Show when={() => Object.keys(data()).length}>
                        <button onclick={exportData}>
                            Export
                        </button>
                    </Show>

                    <button onclick={openImportModal}>
                        Import
                    </button>

                    <button onclick={saveDeck}>Save Deck</button>
                </div>

                <For each={FleshBloodLayout.rows}>{(row, i) =>
                    <div class="game-row" style={{ "max-height": `${rowHeight}px` }}>
                        <For each={row.cells}>{(cell, i) =>
                            <div onclick={() => clickSpot(cell)} class={(cell.initializable ? '' : 'disabled') + " card-cell"} style={{ "height": `${rowHeight - 3}px` }}>
                                <div class="game-card">
                                    {/* <Show when={cell.initializable}> */}
                                    <img class={"game-card-img " + (data()[cell.label]?.length ? '' : 'empty')} src={FleshBloodLayout.cardBack}></img>
                                    {/* </Show> */}
                                </div>
                                <div class="game-card-label">{cell.label}</div>
                            </div>
                        }</For>
                    </div>
                }</For>
                <button onclick={continueWithDeck}>Continue</button>
            </div>
            <Show when={inputCell() !== null}>
                <div class="input-panel">
                    <h2>{inputCellLabel()}</h2>
                    <Show when={inputCell()!.type === 'DECK'}>
                        <textarea onblur={saveSpot} id={inputCellLabel()} ref={inputTextArea} value={data()[inputCellLabel() || '']?.join?.('\n') || ''}></textarea>
                    </Show>
                    <Show when={inputCell()!.type === 'SPOT'}>
                        <input onblur={saveSpot} id={inputCellLabel()} type="text" ref={inputField} value={data()[inputCellLabel() || ''] || ''}></input>
                    </Show>
                    <button onclick={saveSpot}>Save</button>
                </div>
            </Show>
        </div >
    </>
}