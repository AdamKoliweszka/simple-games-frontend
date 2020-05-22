import { OfflinePlayer } from "./models/offline-player";
import * as PlayersActions from "./offline-players-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface OfflinePlayersState {
  offlinePlayers: OfflinePlayer[];
  activePlayer: OfflinePlayer;
}

const initialState: OfflinePlayersState = {
  offlinePlayers: [],
  activePlayer: null,
};

const offlinePlayersReducer = createReducer(
  initialState,
  on(PlayersActions.addPlayer, (state, { player }) => ({
    ...state,
    offlinePlayers: [...state.offlinePlayers.concat([player])],
  })),
  on(PlayersActions.addPointsToPlayerOfIndex, (state, { index }) => ({
    ...state,
    offlinePlayers: [
      ...state.offlinePlayers.map((value, i) => {
        if (i === index) {
          value.points++;
        }
        return { ...value };
      }),
    ],
  })),
  on(PlayersActions.initActivePlayer, (state, { player }) => ({
    ...state,
    activePlayer: { ...player },
  })),
  on(PlayersActions.changeActivePlayer, (state) => ({
    ...state,
    activePlayer: {
      ...state.offlinePlayers[
        (state.offlinePlayers.findIndex(
          (player) => state.activePlayer.name === player.name
        ) +
          1) %
          state.offlinePlayers.length
      ],
    },
  })),
  on(PlayersActions.initPoints, (state, { points }) => ({
    ...state,
    offlinePlayers: [
      ...state.offlinePlayers.map((player) => {
        player.points = points;
        return { ...player };
      }),
    ],
  }))
);

export function reducer(
  state: OfflinePlayersState | undefined,
  action: Action
) {
  return offlinePlayersReducer(state, action);
}
