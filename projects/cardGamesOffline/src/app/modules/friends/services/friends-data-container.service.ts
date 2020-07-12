import { Injectable } from "@angular/core";
import { FriendsState } from "../friends-state/friends-state.reducers";
import { Store } from "@ngrx/store";
import * as FriendsSelectors from "../friends-state/friends-state.selectors";
import * as FriendsActions from "../friends-state/friends-state.actions";
import { User } from "../../user-of-service/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FriendsDataContainerService {
  constructor(private store: Store<FriendsState>) {}

  loadUsersList() {
    this.store.dispatch(FriendsActions.loadAllUsers());
  }

  loadFriendshipsList() {
    this.store.dispatch(FriendsActions.loadAllFriendships());
  }

  inviteFriend(username: string) {
    this.store.dispatch(
      FriendsActions.inviteFriend({ friendUsername: username })
    );
  }

  get listOfUsers(): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectAllUsers);
  }

  get listOfIsNotInRelationWithUser(): Observable<boolean[]> {
    return this.store.select(FriendsSelectors.selectIsNotInRelationList);
  }

  listOfUsersByUsername(username: string): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectUsersByUsername, {
      username,
    });
  }
}
