import { FriendsState } from "./friends-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { friendsStateKey } from "./friends-state.key";
import { selectUserOfServiceState } from "../../user-of-service/user-of-service-state/users-of-service.selectors";
import { UserOfServiceState } from "../../user-of-service/user-of-service-state/user-of-service-state.reducers";
import { StatusOfFriendship } from "../enum/status-friendship.enum";

export const selectFriendState = createFeatureSelector<FriendsState>(
  friendsStateKey
);

export const selectAllUsers = createSelector(
  selectFriendState,
  (state: FriendsState) => state.users
);

export const selectUsersByUsername = createSelector(
  selectFriendState,
  (state: FriendsState, props) =>
    state.users.filter((user) =>
      user.username.toLowerCase().includes(props.username.toLowerCase())
    )
);

export const selectIsNotInRelationList = createSelector(
  selectFriendState,
  (state: FriendsState) => {
    return state.users.map((user) => {
      return (
        state.friendships.find((friendship) => {
          return (
            friendship.usernameOfSecondUser === user.username ||
            friendship.usernameOfStartingRelationshipUser === user.username
          );
        }) === undefined
      );
    });
  }
);

export const selectInviteToAccept = createSelector(
  selectFriendState,
  selectUserOfServiceState,
  (state: FriendsState, userState: UserOfServiceState) =>
    state.friendships.filter((friendship) => {
      return (
        friendship.usernameOfSecondUser === userState.username &&
        friendship.status === StatusOfFriendship.AFTER_INVITE
      );
    })
);

export const selectSentInvite = createSelector(
  selectFriendState,
  selectUserOfServiceState,
  (friendState: FriendsState, userState: UserOfServiceState) =>
    friendState.friendships.filter((friendship) => {
      return (
        friendship.usernameOfStartingRelationshipUser === userState.username &&
        friendship.status === StatusOfFriendship.AFTER_INVITE
      );
    })
);

export const selectAllFriends = createSelector(
  selectFriendState,
  (state: FriendsState) =>
    state.users.filter((user) => {
      return (
        state.friendships.find((friendship) => {
          return (
            friendship.status === StatusOfFriendship.ACCEPTED &&
            (friendship.usernameOfSecondUser === user.username ||
              friendship.usernameOfStartingRelationshipUser === user.username)
          );
        }) !== undefined
      );
    })
);
