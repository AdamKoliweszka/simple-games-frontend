import { FriendsState } from "./friends-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { friendsStateKey } from "./friends-state.key";

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
