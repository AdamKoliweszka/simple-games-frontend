import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  loadAllUsers,
  initAllUsers,
  inviteFriend,
  loadAllFriendships,
  initAllFriendships,
  addFriendship,
} from "./friends-state.actions";
import { mergeMap, map } from "rxjs/operators";
import { OfflinePlayersState } from "../../offline-players/offline-players-state/offline-players-state.reducers";
import { Store } from "@ngrx/store";
import { FriendsState } from "./friends-state.reducers";
import { FriendsApiService } from "../services/friends-api.service";
import { dispatch } from "rxjs/internal/observable/pairs";

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
      return this.friendsApiService.getUsersList().pipe(
        map((value) => {
          return initAllUsers({ users: value });
        })
      );
    })
  );

  @Effect()
  loadFriendships$ = this.action.pipe(
    ofType(loadAllFriendships),
    mergeMap((action) => {
      return this.friendsApiService.getFriendshipList().pipe(
        map((value) => {
          return initAllFriendships({ friendships: value });
        })
      );
    })
  );

  @Effect()
  addToFriends$ = this.action.pipe(
    ofType(inviteFriend),
    mergeMap((action) => {
      return this.friendsApiService
        .sendInviteToFriend(action.friendUsername)
        .pipe(
          map((value) => {
            return addFriendship({ friendship: value });
          })
        );
    })
  );
}
