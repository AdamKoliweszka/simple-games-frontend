import { FriendsState } from "./friends-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { friendsStateKey } from "./friends-state.key";

export const selectFriendState = createFeatureSelector<FriendsState>(
  friendsStateKey
);

export const selectAllUsers = createSelector(
  selectFriendState,
  (state) => state.users
);
