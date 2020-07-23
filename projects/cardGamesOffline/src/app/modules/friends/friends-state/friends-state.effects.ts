import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  loadAllUsers,
  initAllUsers,
  inviteFriend,
  loadAllFriendships,
  initAllFriendships,
  addFriendship,
  acceptInviteToFriendship,
  editFriendship,
  discardInviteToFriendship,
  removeFriendship,
} from "./friends-state.actions";
import { mergeMap, map, withLatestFrom } from "rxjs/operators";
import { OfflinePlayersState } from "../../offline-players/offline-players-state/offline-players-state.reducers";
import { Store, select } from "@ngrx/store";
import { FriendsState } from "./friends-state.reducers";
import { FriendsApiService } from "../services/friends-api.service";
import { dispatch } from "rxjs/internal/observable/pairs";
import { StatusOfFriendship } from "../enum/status-friendship.enum";
import {
  selectAllFriends,
  selectAllFriendship,
  selectOneFriendship,
} from "./friends-state.selectors";

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

  @Effect()
  acceptInvite$ = this.action.pipe(
    ofType(acceptInviteToFriendship),
    mergeMap((action) => {
      return this.friendsApiService
        .changeStatusOfFriendship(
          action.friendship.usernameOfStartingRelationshipUser,
          StatusOfFriendship.ACCEPTED
        )
        .pipe(
          map((value) => {
            return editFriendship({ friendship: value });
          })
        );
    })
  );

  @Effect()
  discardInvite$ = this.action.pipe(
    ofType(discardInviteToFriendship),
    mergeMap((action) => {
      return this.friendsApiService
        .changeStatusOfFriendship(
          action.friendship.usernameOfStartingRelationshipUser,
          StatusOfFriendship.NOT_ACCEPTED
        )
        .pipe(
          map((value) => {
            return editFriendship({ friendship: value });
          })
        );
    })
  );

  @Effect()
  removeFriendship$ = this.action.pipe(
    ofType(removeFriendship),
    mergeMap((action) => {
      return this.friendsApiService
        .changeStatusOfFriendship(
          action.friendUsername,
          StatusOfFriendship.REMOVED
        )
        .pipe(
          map((value) => {
            return editFriendship({ friendship: value });
          })
        );
    })
  );
}
