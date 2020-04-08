import { createAction, props } from "@ngrx/store";
import { Card } from "../../cards/models/card";

export const initFirstPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Init first player cards",
  props<{ cards: Card[] }>()
);

export const initSecondPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Init second player cards",
  props<{ cards: Card[] }>()
);

export const addCardToFirstPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add card to first players cards",
  props<{ card: Card }>()
);

export const addCardToSecondPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add card to second players cards",
  props<{ card: Card }>()
);

export const addCardsToFirstPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add cards to first players cards",
  props<{ cards: Card[] }>()
);

export const addCardsToSecondPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add cards to second players cards",
  props<{ cards: Card[] }>()
);

export const removeFirstCardOfFirstPlayer = createAction(
  "[OFFLINE_WAR_GAME] Remove first card of first player"
);

export const removeFirstCardOfSecondPlayer = createAction(
  "[OFFLINE_WAR_GAME] Remove first card of second player"
);

export const setActualCardOfFirstPlayer = createAction(
  "[OFFLINE_WAR_GAME] Set actual card of first player",
  props<{ card: Card }>()
);

export const setActualCardOfSecondPlayer = createAction(
  "[OFFLINE_WAR_GAME] Set actual card of second player",
  props<{ card: Card }>()
);
