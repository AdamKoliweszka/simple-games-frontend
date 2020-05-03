import * as UsersActions from "./user-of-service-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UserOfServiceState {
  accessToken: string;
  refreshToken: string;
  isRefreshing: boolean;
}

const initialState: UserOfServiceState = {
  accessToken: null,
  refreshToken: null,
  isRefreshing: false,
};

const userOfServiceReducer = createReducer(
  initialState,
  on(UsersActions.setAccessToken, (state, { accessToken }) => ({
    ...state,
    accessToken: accessToken,
  })),
  on(UsersActions.setRefreshToken, (state, { refreshToken }) => ({
    ...state,
    refreshToken: refreshToken,
  })),
  on(UsersActions.logoutUser, (state) => ({
    ...state,
    accessToken: null,
    refreshToken: null,
  })),
  on(UsersActions.setRefreshingFlag, (state, { refreshFlag }) => ({
    ...state,
    isRefreshing: refreshFlag,
  }))
);

export function reducer(state: UserOfServiceState | undefined, action: Action) {
  return userOfServiceReducer(state, action);
}
