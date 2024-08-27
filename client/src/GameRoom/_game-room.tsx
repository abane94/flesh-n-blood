import { For, Show, createResource } from "solid-js";
import type { AttackCard, CreatureCard } from "../../../game/types/common";
import type { LobbyGame } from '../../../server/lobby-types'
import { canBeginCombat, canDraw, canPlayAttack, combatPhase, creatureCard, gameId, gameStatus, hand, myCreature, name, opponentCreature, opponentCreatureCard, opponentName, userId } from "../global-state";
import { ActionRequest } from '../../../server/api'

// const fetchGames = async () =>
//     (await (await fetch(`/api/game?status=Open`)).json()).games;

const GameRoom = () => {
    // const [games] = createResource<LobbyGame[]>(fetchGames);
    // const createGame = () => { }
    // const joinGame = (game: LobbyGame) => { }

    const beginCombat = async () => {
        const body: ActionRequest = {
            playerId: userId(),
            gameId: gameId(),
            actionPayload: undefined,
            action: {
                actionType: "Game",
                actionName: 'attack'
            }
        }
        const response = await (await fetch(`/api/action`, {
            method: 'POST',
            body: JSON.stringify(body)
        })).json();
        console.log(response);
    }

    const draw = async () => {
        const body: ActionRequest = {
            playerId: userId(),
            gameId: gameId(),
            actionPayload: undefined,
            action: {
                actionType: "Combat",
                actionName: 'draw'
            }
        }
        const response = await (await fetch(`/api/action`, {
            method: 'POST',
            body: JSON.stringify(body)
        })).json();
        console.log(response);
    }

    const playAttack = async (card: AttackCard) => {
        if (!canPlayAttack()) { return; }
        const body: ActionRequest = {
            playerId: userId(),
            gameId: gameId(),
            actionPayload: {
                attacker: myCreature(),
                attack: card,
                target: opponentCreature()?.cardId
            },
            action: {
                actionType: "Combat",
                actionName: 'playAttack'
            }
        }
        const response = await (await fetch(`/api/action`, {
            method: 'POST',
            body: JSON.stringify(body)
        })).json();
        console.log(response);
    }

    return (
        <>
            {/* <h1>Game Room</h1> */}
            <Show when={!opponentName()}> Waiting for player to join</Show>
            <Show when={gameStatus() === 'InProgress'}>
                <div class="flex four">
                    <div>
                        <h2>{opponentName()}</h2>
                        Combat phase: {combatPhase()}
                    </div>
                    <div>
                        <img style="max-width:200px" src={opponentCreatureCard()?.thumb || opponentCreatureCard()?.cardImage}></img>
                    </div>
                    <div>
                        Energy:
                        <Show when={combatPhase()}>
                            {opponentCreature()?.currentStats.energy} /&nbsp;
                        </Show>
                        {opponentCreatureCard()?.stats.energy}
                    </div>
                </div>

                <div class="flex four">
                    <div></div>
                    <div>
                        Energy:
                        <Show when={combatPhase()}>
                            {myCreature()?.currentStats.energy} /&nbsp;
                        </Show>
                        {creatureCard()?.stats.energy}
                    </div>
                    <div>
                        <img style="max-width:200px" src={creatureCard()?.thumb || creatureCard()?.cardImage}></img>
                    </div>
                    <div>
                        <h2>{name()}</h2>
                    </div>
                </div>
                <div class="flex center">
                    <div></div>
                    <Show when={combatPhase()}>
                        <For each={hand()}>{(card, i) =>
                            <div style="max-width:180px" class="card" onClick={() => { playAttack(card) }}>
                                {/* {card.name} */}
                                <img src={card.cardImage} classList={{ 'image-disabled': !canPlayAttack() }} />
                            </div>
                        }</For>
                    </Show>
                    <Show when={!combatPhase() && canBeginCombat()}>
                        <button onclick={beginCombat}>Begin Combat</button>
                    </Show>

                    <div></div>
                    <div>
                        <Show when={canDraw()}>
                            <img style="max-width:180px" onclick={draw} class="card" src="https://upload.wikimedia.org/wikipedia/en/7/73/Chaotic_cardback.jpg"></img>
                        </Show>
                    </div>
                </div>
            </Show>
        </>

    )
}

export default GameRoom;