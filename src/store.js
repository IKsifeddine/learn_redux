import { createStore } from "redux";

const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
};

export const playPause = () => ({ type: "playPause" });
export const restartGame = () => ({ type: "restart" });
export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case "restart":
      return initialState;
    case "playPause":
      if (state.winner) {
        return state;
      }
      return {
        ...state,
        playing: !state.playing,
      };
    case "pointScored":
      const player = action.payload.player;
      const otherPlayer = player === "player1" ? "player2" : "player1";
      if (state.winner || !state.playing) {
        return state;
      }
      const currentPlayerScore = state[player];
      if (currentPlayerScore <= 15) {
        return { ...state, [player]: currentPlayerScore + 15 };
      }
      if (currentPlayerScore === 30) {
        return { ...state, [player]: 40 };
      }
      if (currentPlayerScore === 40) {
        if (state[otherPlayer] !== 40) {
          return { ...state, winner: player };
        }
        if (state.advantage === player) {
          return { ...state, winner: player };
        }
        if (state.advantage === null) {
          return { ...state, advantage: player };
        }
        return { ...state, advantage: null };
      }
      break;
    default:
      return state;
  }
}

export const store = createStore(reducer);
