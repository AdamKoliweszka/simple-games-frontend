import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { mergeMap, map, withLatestFrom, tap, catchError } from "rxjs/operators";

import { loadGamesList, initGamesList } from "./games-state.actions";
import { GamesListApiService } from "./services/games-list-api.service";

@Injectable()
export class GamesStateEffect {
  constructor(
    private action: Actions,
    private gamesListApiService: GamesListApiService
  ) {}

  @Effect()
  loadGamesList$ = this.action.pipe(
    ofType(loadGamesList),
    mergeMap((action) => {
      return this.gamesListApiService.getGamesList().pipe(
        map((value) => {
          return initGamesList({ games: value });
        })
      );
    })
  );
}
