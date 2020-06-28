import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { loadAllUsers, initAllUsers } from "./friends-state.actions";
import { mergeMap, map } from "rxjs/operators";
import { OfflinePlayersState } from "../../offline-players/offline-players-state/offline-players-state.reducers";
import { Store } from "@ngrx/store";
import { FriendsState } from "./friends-state.reducers";
import { FriendsApiService } from "../services/friends-api.service";

@Injectable()
export class FriendsStateEffect {
  constructor(
    private action: Actions,
    private friendsStore: Store<FriendsState>,
    private friendsApiService: FriendsApiService
  ) {}

  @Effect()
  loadUsersList$ = this.action.pipe(
    ofType(loadAllUsers),
    mergeMap((action) => {
      return this.friendsApiService.getGamesList().pipe(
        map((value) => {
          return initAllUsers({ users: value });
        })
      );
    })
  );
}
