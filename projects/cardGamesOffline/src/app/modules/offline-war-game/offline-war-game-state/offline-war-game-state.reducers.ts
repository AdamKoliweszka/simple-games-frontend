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
  readyToCompareFlag: boolean;
}

const initialState: OfflineWarGameState = {
  firstPlayerCards: null,
  secondPlayerCards: null,
  actualCardOfFirstPlayer: null,
  actualCardOfSecondPlayer: null,
  readyToCompareFlag: false,
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
  on(
    GamesActions.addCardsToFirstPlayerCards,
    (state, { cardsOfFirstPlayer }) => ({
      ...state,
      firstPlayerCards: [...state.firstPlayerCards.concat(cardsOfFirstPlayer)],
    })
  ),
  on(
    GamesActions.addCardsToSecondPlayerCards,
    (state, { cardsOfSecondPlayer }) => ({
      ...state,
      secondPlayerCards: [
        ...state.secondPlayerCards.concat(cardsOfSecondPlayer),
      ],
    })
  ),
  on(GamesActions.removeFirstCardOfFirstPlayer, (state) => ({
    ...state,
    firstPlayerCards: state.firstPlayerCards.slice(1),
  })),
  on(GamesActions.removeFirstCardOfSecondPlayer, (state) => ({
    ...state,
    secondPlayerCards: state.secondPlayerCards.slice(1),
  })),
  on(GamesActions.setActualCardOfFirstPlayer, (state, { card }) => ({
    ...state,
    actualCardOfFirstPlayer: { ...card, isClickable: false },
  })),
  on(GamesActions.setActualCardOfSecondPlayer, (state, { card }) => ({
    ...state,
    actualCardOfSecondPlayer: { ...card, isClickable: false },
  })),
  on(GamesActions.setReadyToCompareFlag, (state, { readyToCompareFlag }) => ({
    ...state,
    readyToCompareFlag: readyToCompareFlag,
  })),
  on(GamesActions.removeActualCards, (state) => ({
    ...state,
    actualCardOfFirstPlayer: null,
    actualCardOfSecondPlayer: null,
  }))
);

export function reducer(
  state: OfflineWarGameState | undefined,
  action: Action
) {
  return offlineWarGameReducer(state, action);
}
