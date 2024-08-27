import { For, Show, createResource } from "solid-js";
import type { AttackCard, CreatureCard } from "../../../game/types/common";
import type { LobbyGame } from '../../../server/lobby-types'
import { canBeginCombat, canDraw, canPlayAttack, combatPhase, creatureCard, gameId, gameState, gameStatus, hand, myCreature, name, opponentCreature, opponentCreatureCard, opponentName, userId } from "../global-state";
import { ActionRequest } from '../../../server/api'
import { PlayMat } from "./play-mat";


const GameRoom = () => {
    return <>
        <Show when={gameState()} fallback={<span>Game Loading</span>}>
            <PlayMat></PlayMat>
        </Show>
    </>

}

export default GameRoom;