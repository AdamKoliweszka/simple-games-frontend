import { createAction, props } from "@ngrx/store";
import { Card } from "../../cards/models/card";
import { ResultOfComparission } from "../models/result-of-comparission";

export const initFirstPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Init first player cards",
  props<{ cards: Card[] }>()
);

export const initSecondPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Init second player cards",
  props<{ cards: Card[] }>()
);

export const addCardsToFirstPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add cards to first players cards",
  props<{ cardsOfFirstPlayer: Card[] }>()
);

export const addCardsToSecondPlayerCards = createAction(
  "[OFFLINE_WAR_GAME] Add cards to second players cards",
  props<{ cardsOfSecondPlayer: Card[] }>()
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

export const removeActualCards = createAction(
  "[OFFLINE_WAR_GAME] Remove actual cards"
);

export const makeMove = createAction("[OFFLINE_WAR_GAME] Make move");

export const makeFirstPlayerMove = createAction(
  "[OFFLINE_WAR_GAME] Make first player move"
);

export const makeSecondPlayerMove = createAction(
  "[OFFLINE_WAR_GAME] Make second player move"
);

export const setReadyToCompareFlag = createAction(
  "[OFFLINE_WAR_GAME] Set ready to compare flag",
  props<{ readyToCompareFlag: boolean }>()
);

export const addResultOfRound = createAction(
  "[OFFLINE_WAR_GAME] Add result of round",
  props<{ result: ResultOfComparission }>()
);

export const disableClickabilityOfActualCards = createAction(
  "[OFFLINE_WAR_GAME] Disable clickability of actual cards"
);
