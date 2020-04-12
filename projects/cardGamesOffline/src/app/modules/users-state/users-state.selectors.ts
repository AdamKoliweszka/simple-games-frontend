import { UsersState } from "./users-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { usersStateKey } from "./users-state.key";

export const selectUsersState = createFeatureSelector<UsersState>(
  usersStateKey
);

export const selectFirstUser = createSelector(
  selectUsersState,
  (state) => state.firstUser
);

export const selectActiveUser = createSelector(
  selectUsersState,
  (state) => state.activeUser
);

export const selectIsFirstUserActive = createSelector(
  selectUsersState,
  (state) => state.activeUser.name === state.firstUser.name
);

export const selectSecondUser = createSelector(
  selectUsersState,
  (state) => state.secondUser
);

export const selectPointsFirstUser = createSelector(
  selectUsersState,
  (state) => state.pointsFirstUser
);

export const selectPointsSecondUser = createSelector(
  selectUsersState,
  (state) => state.pointsSecondUser
);

export const selectIsUsersInit = createSelector(
  selectUsersState,
  (state) => state.secondUser != null && state.firstUser != null
);
