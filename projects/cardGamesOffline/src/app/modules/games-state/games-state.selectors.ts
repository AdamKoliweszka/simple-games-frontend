import { GamesState } from "./games-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { gamesStateKey } from "./games-state.key";

export const selectGamesState = createFeatureSelector<GamesState>(
  gamesStateKey
);

export const selectGamesList = createSelector(
  selectGamesState,
  state => state.games
);
