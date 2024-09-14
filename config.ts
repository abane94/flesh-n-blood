interface SpotDeckBase {
  type: "SPOT" | "DECK";
  label: string;
  faceDown?: boolean;
  initializable?: boolean;
  destination?: boolean;
  flipable?: boolean;
  hidePlaceholder?: boolean;
  counter?: {
    start: number;
    min: number;
    max?: number;
    step?: number;
  };
}

export interface SingleSpot extends SpotDeckBase {
  type: "SPOT";
}

export interface Deck extends SpotDeckBase {
  type: "DECK";
  drawable?: boolean;
  searchable?: boolean;
  horizontalStack?: boolean;
  shuffle?: boolean;
}

export type Spot = SingleSpot | Deck;

type GameConfigRow = {
  flex: string;
  cells: Spot[];
  backgroundColor?: string;
};

export type GameLayoutConfig = {
  rows: GameConfigRow[];
  cardBack: string;
};

export const FleshBloodLayout: GameLayoutConfig = {
  rows: [{
    flex: "fill",
    backgroundColor: "lightred",
    cells: [{
      label: "Combat Chain",
      faceDown: false,
      type: "DECK",
      initializable: false,
      destination: true,
      drawable: false, /// ??
      flipable: false,
      horizontalStack: true,
      hidePlaceholder: true,
    }],
  }, {
    flex: "space-between",
    cells: [{
      label: "Head",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Graveyard",
      faceDown: true,
      type: "DECK",
      initializable: false,
      destination: true,
      drawable: false,
      flipable: false,
    }],
  }, {
    flex: "space-between",
    cells: [{
      label: "Chest",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Arms",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Weapon 1",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Hero",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: false,
      flipable: true,
      counter: {
        start: 0,
        min: 0,
      },
    }, {
      label: "Weapon 2",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Pitch",
      faceDown: false,
      type: "DECK",
      initializable: false,
      destination: true,
      drawable: false,
      flipable: false,
    }, {
      label: "Deck",
      faceDown: true,
      type: "DECK",
      initializable: true,
      destination: false,
      drawable: true,
      flipable: false,
      shuffle: true,
    }],
  }, {
    flex: "space-between",
    cells: [{
      label: "Legs",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Arsenal",
      faceDown: true,
      type: "SPOT",
      initializable: true,
      destination: true,
      flipable: true,
    }, {
      label: "Banished",
      faceDown: false,
      type: "DECK",
      initializable: false,
      destination: true,
      drawable: false,
      flipable: false,
    }],
  }],
  cardBack:
    "https://dhhim4ltzu1pj.cloudfront.net/media/images/back4.width-300.format-webp.webp",
};

export interface SingleSpotState {
  type: "SPOT";
  faceDown: boolean;
  counter: number;
  card: string;
  notes: string;
}

export interface DeckState {
  type: "DECK";
  faceDown: boolean;
  counter: number;
  cards: string[];
  notes: string;
}

export type SpotState = SingleSpotState | DeckState;

export interface PlayerState {
  [deckOrSpotLabel: string]: SpotState;
}

interface ConfigMap {
  [label: string]: Spot;
}

export function getConfigObject(layoutConfig: GameLayoutConfig) {
  const map: ConfigMap = {};
  for (const row of layoutConfig.rows) {
    for (const cell of row.cells) {
      map[cell.label] = cell;
    }
  }
  return map;
}

function shuffle<T>(cards: T[]): T[] {
  for (let i = 0; i < cards.length; i++) {
    const otherIdx = Math.floor(Math.random() * cards.length);
    const temp = cards[otherIdx];
    cards[otherIdx] = cards[i];
    cards[i] = temp;
  }
  return cards;
}

export function initPlayerState(
  config: ConfigMap,
  data: Record<string, string | string[]>,
) {
  const state: PlayerState = {};
  for (const label of Object.keys(config)) {
    const spotConfig = config[label];
    if (spotConfig.type === "DECK") {
      let cards = spotConfig.initializable ? (data[label] as string[]) : [];
      if (spotConfig.shuffle) {
        cards = shuffle(shuffle(cards));
      }
      state[label] = {
        type: "DECK",
        faceDown: spotConfig.faceDown || false,
        counter: spotConfig.counter?.start || 0,
        cards: cards,
        notes: "",
      };
    } else if (spotConfig.type === "SPOT") {
      state[label] = {
        type: "SPOT",
        faceDown: spotConfig.faceDown || false,
        counter: spotConfig.counter?.start || 0,
        card: spotConfig.initializable ? (data[label] as string) : "",
        notes: "",
      };
    } else {
      console.warn("Invalid spot config " + spotConfig["type"]);
    }
  }
  return state;
}
