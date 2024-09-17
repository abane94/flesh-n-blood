import { Show, type Component } from 'solid-js';

import LandingPage from "./landing/landing-page";
import { gameId, name, deckData } from './global-state';
import { Dynamic } from 'solid-js/web';
import Lobby from './lobby/lobby';
import GameRoom from './GameRoom/game-room';
// import { PlayMat } from './GameRoom/play-mat';
import { GameInitScreen } from './layout-initialization/deck-init-screen';
import { Modal } from './widgets/modal';

const App: Component = () => {

  const page = () => {
    if (!name()) {
      return LandingPage;
    }
    if (!deckData()) {
      return GameInitScreen
    }
    if (!gameId()) {
      return Lobby
    }
    return GameRoom;
  }
  return (
    <div class="flex center" style="height:100%">
      <div class="" style="width:100%">
        <Dynamic component={page()} />
      </div>
      <Modal />
    </div>
  );
};

export default App;
