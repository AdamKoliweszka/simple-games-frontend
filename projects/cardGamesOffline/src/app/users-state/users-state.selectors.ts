import { UsersState } from "./users-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";

export const selectUsersState = createFeatureSelector<UsersState>("users");

export const selectFirstUser = createSelector(
  selectUsersState,
  state => state.firstUser
);
