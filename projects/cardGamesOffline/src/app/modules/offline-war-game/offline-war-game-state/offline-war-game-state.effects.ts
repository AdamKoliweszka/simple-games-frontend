import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  makeMove,
  setActualCardOfFirstPlayer,
  setActualCardOfSecondPlayer,
  makeFirstPlayerMove,
  makeSecondPlayerMove,
  removeFirstCardOfFirstPlayer,
  removeFirstCardOfSecondPlayer,
  setReadyToCompareFlag,
  addResultOfRound,
  addCardsToFirstPlayerCards,
  addCardsToSecondPlayerCards,
  removeActualCards,
  initFirstPlayerCards,
  initSecondPlayerCards,
} from "./offline-war-game-state.actions";
import { withLatestFrom, tap, mergeMap, map } from "rxjs/operators";
import {
  changeActivePlayer,
  addPointsToPlayerOfIndex,
} from "../../offline-players-state/offline-players-state.actions";
import { OfflinePlayersState } from "../../offline-players-state/offline-players-state.reducers";
import { Store, select } from "@ngrx/store";
import { OfflineWarGameState } from "./offline-war-game-state.reducers";
import {
  selectFirstCardOfFirstPlayer,
  selectFirstCardOfSecondPlayer,
  selectFirstPlayerCards,
  selectSecondPlayerCards,
} from "./offline-war-game-state.selectors";
import {
  selectActivePlayer,
  selectPlayer,
} from "../../offline-players-state/users-state.selectors";

@Injectable()
export class WarGameEffect {
  constructor(
    private action: Actions,
    private usersStore: Store<OfflinePlayersState>,
    private cardStore: Store<OfflineWarGameState>
  ) {}

  @Effect()
  makeMove$ = this.action.pipe(
    ofType(makeMove),
    withLatestFrom(
      this.usersStore.pipe(select(selectActivePlayer)),
      this.usersStore.pipe(select(selectPlayer, { index: 0 }))
    ),
    mergeMap(([action, activePlayer, firstPlayer]) => {
      if (activePlayer.name === firstPlayer.name) {
        return [changeActivePlayer(), makeFirstPlayerMove()];
      } else {
        return [makeSecondPlayerMove()];
      }
    })
  );

  @Effect()
  makeFirstPlayerMove$ = this.action.pipe(
    ofType(makeFirstPlayerMove),
    withLatestFrom(this.cardStore.pipe(select(selectFirstCardOfFirstPlayer))),
    mergeMap(([action, card]) => {
      return [
        setActualCardOfFirstPlayer({ card }),
        removeFirstCardOfFirstPlayer(),
      ];
    })
  );

  @Effect()
  makeSecondPlayerMove$ = this.action.pipe(
    ofType(makeSecondPlayerMove),
    withLatestFrom(this.cardStore.pipe(select(selectFirstCardOfSecondPlayer))),
    mergeMap(([action, card]) => {
      let readyToCompareFlag = true;
      return [
        setActualCardOfSecondPlayer({ card }),
        removeFirstCardOfSecondPlayer(),
        setReadyToCompareFlag({ readyToCompareFlag }),
      ];
    })
  );

  @Effect()
  addResult$ = this.action.pipe(
    ofType(addResultOfRound),
    mergeMap((action) => {
      let result = action.result;
      let cardsOfFirstPlayer = result.cardsOfFirstPlayer;
      let cardsOfSecondPlayer = result.cardsOfSecondPlayer;
      let readyToCompareFlag = false;
      let actions = [
        addCardsToFirstPlayerCards({ cardsOfFirstPlayer }),
        addCardsToSecondPlayerCards({ cardsOfSecondPlayer }),
        removeActualCards(),
        setReadyToCompareFlag({ readyToCompareFlag }),
      ];
      if (cardsOfSecondPlayer.length > 1)
        actions.push(addPointsToPlayerOfIndex({ index: 1 }) as any);
      else if (cardsOfSecondPlayer.length == 0)
        actions.push(addPointsToPlayerOfIndex({ index: 0 }) as any);
      return actions;
    })
  );

  @Effect()
  addClickability$ = this.action.pipe(
    ofType(removeActualCards),
    withLatestFrom(
      this.cardStore.pipe(select(selectFirstPlayerCards)),
      this.cardStore.pipe(select(selectSecondPlayerCards))
    ),
    mergeMap(([action, cardsOfFirstPlayer, cardsOfSecondPlayer]) => {
      cardsOfFirstPlayer[0].isClickable = true;
      cardsOfSecondPlayer[0].isClickable = true;
      return [
        initFirstPlayerCards({ cards: cardsOfFirstPlayer }),
        initSecondPlayerCards({ cards: cardsOfSecondPlayer }),
        changeActivePlayer(),
      ];
    })
  );
}
