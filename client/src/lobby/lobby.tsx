
import { For, Show, createResource } from "solid-js";
import type { CreatureCard } from "../../../game/types/common";
import type { LobbyGame } from '../../../server/lobby-types'
import { creatureCard, deckData, name, setGameId, setIsPlayer0, setUserId } from "../global-state";

const fetchGames = async () =>
    (await (await fetch(`/api/game?status=Open`)).json()).games;

const Lobby = () => {
    const [games] = createResource<LobbyGame[]>(fetchGames);
    const createGame = async () => {
        const response = await (await fetch(`/api/game`, {
            method: 'POST',
            body: JSON.stringify({
                name: name(),
                creature: creatureCard()?.id,
                deckData: deckData()
            })
        })).json();
        setIsPlayer0(true);
        setUserId(response.payload.userId);
        setGameId(response.payload.gameId);
    }
    const joinGame = async (game: LobbyGame) => {
        const response = await (await fetch(`/api/join/${game.id}`, {
            method: 'POST',
            body: JSON.stringify({
                name: name(),
                creature: creatureCard()?.id,
                deckData: deckData()
            })
        })).json();
        setIsPlayer0(false); // is the default, this might not be needed
        setUserId(response.payload.userId);
        setGameId(response.payload.gameId);
    }

    return (
        <div class="flex two">
            <div>
                <h3>{name()}</h3>
                <div class="">
                    {/* <img src={creatureCard()?.cardImage} /> */}
                    <img src={deckData()?.Hero} />
                </div>
                <button onclick={createGame}>Create Game</button>
            </div>
            <div>
                <div>
                    <Show when={!games.loading} fallback={<p>loading</p>}>
                        <For each={games()}>{(game, i) =>
                            <div class="" onClick={() => joinGame(game)}>
                                {game.player0Name} {game.id}
                                {/* {JSON.stringify(game)} */}
                                {/* Game ^ */}
                            </div>
                        }</For>
                    </Show>
                </div>
            </div>
        </div>
    )
}


export default Lobby
