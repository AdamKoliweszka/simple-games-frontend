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
} from "./offline-war-game-state.actions";
import { map, concatMap, withLatestFrom, tap, mergeMap } from "rxjs/operators";
import { changeActiveUser } from "../../users-state/users-state.actions";
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
}
