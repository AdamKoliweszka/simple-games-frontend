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
} from "./offline-war-game-state.actions";
import { withLatestFrom, tap, mergeMap } from "rxjs/operators";
import {
  changeActiveUser,
  addPointsToFirstUser,
  addPointsToSecondUser,
} from "../../users-state/users-state.actions";
import { UsersState } from "../../users-state/users-state.reducers";
import { Store, select } from "@ngrx/store";
import { selectIsFirstUserActive } from "../../users-state/users-state.selectors";
import { OfflineWarGameState } from "./offline-war-game-state.reducers";
import {
  selectFirstCardOfFirstPlayer,
  selectFirstCardOfSecondPlayer,
} from "./offline-war-game-state.selectors";

@Injectable()
export class WarGameEffect {
  constructor(
    private action: Actions,
    private usersStore: Store<UsersState>,
    private cardStore: Store<OfflineWarGameState>
  ) {}

  @Effect()
  makeMove$ = this.action.pipe(
    ofType(makeMove),
    withLatestFrom(this.usersStore.pipe(select(selectIsFirstUserActive))),
    mergeMap(([action, isFirstUserActive]) => {
      if (isFirstUserActive) {
        return [changeActiveUser(), makeFirstPlayerMove()];
      } else {
        return [changeActiveUser(), makeSecondPlayerMove()];
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
        actions.push(addPointsToSecondUser() as any);
      else if (cardsOfSecondPlayer.length == 0)
        actions.push(addPointsToFirstUser() as any);
      return actions;
    })
  );
}
