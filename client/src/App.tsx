import { Show, type Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import LandingPage from "./landing/landing-page";
import { creatureCard, gameId, name, deckData } from './global-state';
import Tabs from './creature-selection/tabs';
import { Dynamic } from 'solid-js/web';
// import { CreatureProvider } from './creatures';
import Lobby from './lobby/lobby';
import GameRoom from './GameRoom/game-room';
import { PlayMat } from './GameRoom/play-mat';
import { GameInitScreen } from './layout-initialization/deck-init-screen';
import { Modal } from './widgets/modal';

const App: Component = () => {

  const page = () => {
    // return GameInitScreen
    if (!name()) {
      return LandingPage;
    }
    // if (!creatureCard()) {
    //   return Tabs;
    // }
    if (!deckData()) {
      return GameInitScreen
    }
    if (!gameId()) {
      return Lobby
    }
    return GameRoom;
    // return PlayMat;
  }
  return (
    <div class="flex center" style="height:100%">
      <div class="">
        <Dynamic component={page()} />
      </div>

      <Modal />
    </div>
  );
};

export default App;
