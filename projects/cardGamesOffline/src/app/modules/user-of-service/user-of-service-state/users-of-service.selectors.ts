import { UserOfServiceState } from "./user-of-service-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { userOfServiceStateKey } from "./user-of-service-state.key";

export const selectUserOfServiceState = createFeatureSelector<
  UserOfServiceState
>(userOfServiceStateKey);

export const selectAccessToken = createSelector(
  selectUserOfServiceState,
  (state) => state.accessToken
);

export const selectRefreshToken = createSelector(
  selectUserOfServiceState,
  (state) => state.refreshToken
);

export const selectIsUserLoged = createSelector(
  selectUserOfServiceState,
  (state) => Boolean(state.refreshToken && state.accessToken)
);

export const selectIsRefreshFlag = createSelector(
  selectUserOfServiceState,
  (state) => state.isRefreshing
);
