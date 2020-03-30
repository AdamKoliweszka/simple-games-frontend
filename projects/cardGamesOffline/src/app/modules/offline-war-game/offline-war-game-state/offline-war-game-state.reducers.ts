import * as GamesActions from "./offline-war-game-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { Card } from "../../cards/models/card";

export interface OfflineWarGameState {
  firstPlayerCards: Card[];
  secondPlayerCards: Card[];
}

const initialState: OfflineWarGameState = {
  firstPlayerCards: null,
  secondPlayerCards: null
};

const offlineWarGameReducer = createReducer(
  initialState,
  on(GamesActions.initFirstPlayerCards, (state, { cards }) => ({
    ...state,
    firstPlayerCards: cards
  })),
  on(GamesActions.initSecondPlayerCards, (state, { cards }) => ({
    ...state,
    secondPlayerCards: cards
  })),
  on(GamesActions.addCardToFirstPlayerCards, (state, { card }) => ({
    ...state,
    firstPlayerCards: [...state.firstPlayerCards, card]
  })),
  on(GamesActions.addCardToSecondPlayerCards, (state, { card }) => ({
    ...state,
    secondPlayerCards: [...state.secondPlayerCards, card]
  })),
  on(GamesActions.addCardsToFirstPlayerCards, (state, { cards }) => ({
    ...state,
    firstPlayerCards: [...state.firstPlayerCards, cards]
  })),
  on(GamesActions.addCardsToSecondPlayerCards, (state, { cards }) => ({
    ...state,
    secondPlayerCards: [...state.secondPlayerCards, cards]
  }))
);

export function reducer(
  state: OfflineWarGameState | undefined,
  action: Action
) {
  return offlineWarGameReducer(state, action);
}
