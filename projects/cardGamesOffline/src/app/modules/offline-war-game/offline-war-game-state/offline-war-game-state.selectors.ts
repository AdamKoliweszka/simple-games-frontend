import { OfflineWarGameState } from "./offline-war-game-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { gamesStateKey } from "./offline-war-game-state.key";

export const selectOfflineWarGameState = createFeatureSelector<
  OfflineWarGameState
>(gamesStateKey);

export const selectFirstPlayerCards = createSelector(
  selectOfflineWarGameState,
  state => state.firstPlayerCards
);

export const selectSecondPlayerCards = createSelector(
  selectOfflineWarGameState,
  state => state.secondPlayerCards
);

export const selectFirstCardOfFirstPlayer = createSelector(
  selectOfflineWarGameState,
  state =>
    state.firstPlayerCards.length > 0 ? state.firstPlayerCards[0] : null
);

export const selectFirstCardOfSecondPlayer = createSelector(
  selectOfflineWarGameState,
  state =>
    state.secondPlayerCards.length > 0 ? state.secondPlayerCards[0] : null
);

export const selectNumberOfCardsOfFirstPlayer = createSelector(
  selectOfflineWarGameState,
  state => state.firstPlayerCards.length
);

export const selectNumberOfCardsOfSecondPlayer = createSelector(
  selectOfflineWarGameState,
  state => state.secondPlayerCards.length
);

export const selectActualCardOfFirstPlayer = createSelector(
  selectOfflineWarGameState,
  state => state.actualCardOfFirstPlayer
);

export const selectActualCardOfSecondPlayer = createSelector(
  selectOfflineWarGameState,
  state => state.actualCardOfSecondPlayer
);
