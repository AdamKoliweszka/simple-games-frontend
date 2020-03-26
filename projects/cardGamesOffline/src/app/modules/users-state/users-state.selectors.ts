import { UsersState } from "./users-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { usersStateKey } from "./users-state.key";

export const selectUsersState = createFeatureSelector<UsersState>(
  usersStateKey
);

export const selectFirstUser = createSelector(
  selectUsersState,
  state => state.firstUser
);

export const selectSecondUser = createSelector(
  selectUsersState,
  state => state.secondUser
);
