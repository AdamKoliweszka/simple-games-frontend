import { Injectable } from "@angular/core";
import { FriendsState } from "../friends-state/friends-state.reducers";
import { Store } from "@ngrx/store";
import * as FriendsSelectors from "../friends-state/friends-state.selectors";
import * as FriendsActions from "../friends-state/friends-state.actions";
import { User } from "../../user-of-service/models/user";
import { Observable } from "rxjs";
import { Friendship } from "../interface/friendship.interface";

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

  acceptFriendship(friendship: Friendship) {
    this.store.dispatch(
      FriendsActions.acceptInviteToFriendship({ friendship })
    );
  }

  get listOfInivitesToAccept(): Observable<Friendship[]> {
    return this.store.select(FriendsSelectors.selectInviteToAccept);
  }

  get listOfSentInivites(): Observable<Friendship[]> {
    return this.store.select(FriendsSelectors.selectSentInvite);
  }

  get listOfUsers(): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectAllUsers);
  }

  get listOfFriends(): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectAllFriends);
  }

  get listOfIsNotInRelationWithUser(): Observable<boolean[]> {
    return this.store.select(FriendsSelectors.selectIsNotInRelationList);
  }

  listOfUsersByUsername(username: string): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectUsersByUsername, {
      username,
    });
  }

  listOfFriendsByUsername(username: string): Observable<User[]> {
    return this.store.select(FriendsSelectors.selectFriendsByUsername, {
      username,
    });
  }
}
