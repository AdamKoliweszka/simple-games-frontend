import * as GamesActions from "./offline-war-game-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { Card } from "../../cards/models/card";
import { CardValue } from "../../cards/enums/card-value.enum";
import { CardColor } from "../../cards/enums/card-color.enum";

export interface OfflineWarGameState {
  firstPlayerCards: Card[];
  secondPlayerCards: Card[];
  actualCardOfFirstPlayer: Card;
  actualCardOfSecondPlayer: Card;
}

const initialState: OfflineWarGameState = {
  firstPlayerCards: null,
  secondPlayerCards: null,
  actualCardOfFirstPlayer: {
    value: CardValue.ACE,
    color: CardColor.DIAMONDS,
  } as Card,
  actualCardOfSecondPlayer: {
    value: CardValue.ACE,
    color: CardColor.DIAMONDS,
  } as Card,
};

const offlineWarGameReducer = createReducer(
  initialState,
  on(GamesActions.initFirstPlayerCards, (state, { cards }) => ({
    ...state,
    firstPlayerCards: cards,
  })),
  on(GamesActions.initSecondPlayerCards, (state, { cards }) => ({
    ...state,
    secondPlayerCards: cards,
  })),
  on(GamesActions.addCardToFirstPlayerCards, (state, { card }) => ({
    ...state,
    firstPlayerCards: [...state.firstPlayerCards, card],
  })),
  on(GamesActions.addCardToSecondPlayerCards, (state, { card }) => ({
    ...state,
    secondPlayerCards: [...state.secondPlayerCards, card],
  })),
  on(GamesActions.addCardsToFirstPlayerCards, (state, { cards }) => ({
    ...state,
    firstPlayerCards: [...state.firstPlayerCards, cards],
  })),
  on(GamesActions.addCardsToSecondPlayerCards, (state, { cards }) => ({
    ...state,
    secondPlayerCards: [...state.secondPlayerCards, cards],
  })),
  on(GamesActions.removeFirstCardOfFirstPlayer, (state) => ({
    ...state,
    firstPlayerCards: state.firstPlayerCards.splice(0, 1),
  })),
  on(GamesActions.removeFirstCardOfSecondPlayer, (state) => ({
    ...state,
    secondPlayerCards: state.secondPlayerCards.splice(0, 1),
  })),
  on(GamesActions.setActualCardOfFirstPlayer, (state, { card }) => ({
    ...state,
    actualCardOfFirstPlayer: card,
  })),
  on(GamesActions.setActualCardOfSecondPlayer, (state, { card }) => ({
    ...state,
    actualCardOfSecondPlayer: card,
  }))
);

export function reducer(
  state: OfflineWarGameState | undefined,
  action: Action
) {
  return offlineWarGameReducer(state, action);
}
