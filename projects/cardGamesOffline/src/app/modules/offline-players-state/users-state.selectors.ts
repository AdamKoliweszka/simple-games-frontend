import { OfflinePlayersState } from "./offline-players-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { offlinePlayersStateKey } from "./offline-players-state.key";

export const selectOfflinePlayersState = createFeatureSelector<
  OfflinePlayersState
>(offlinePlayersStateKey);

export const selectPlayer = createSelector(
  selectOfflinePlayersState,
  (state, props) => state.offlinePlayers[props.index]
);

export const selectActivePlayer = createSelector(
  selectOfflinePlayersState,
  (state) => state.activePlayer
);

export const selectPointsOfPlayer = createSelector(
  selectOfflinePlayersState,
  (state, props) => state.offlinePlayers[props.index].points
);

export const selectIsNumberOfPlayersEqualTo = createSelector(
  selectOfflinePlayersState,
  (state, props) => state.offlinePlayers.length === props.number
);
