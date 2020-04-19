import { createAction, props } from "@ngrx/store";
import { OfflinePlayer } from "projects/cardGamesOffline/src/app/modules/offline-players/offline-players-state/models/offline-player";

export const addPlayer = createAction(
  "[Offline_Players] Add player",
  props<{ player: OfflinePlayer }>()
);

export const initActivePlayer = createAction(
  "[Offline_Players] Add active player",
  props<{ player: OfflinePlayer }>()
);

export const changeActivePlayer = createAction(
  "[Offline_Players] Change active player"
);

export const initPoints = createAction(
  "[Offline_Players] Init points of players",
  props<{ points: number }>()
);

export const addPointsToPlayerOfIndex = createAction(
  "[Offline_Players] Add points to Player with index",
  props<{ index: number }>()
);
