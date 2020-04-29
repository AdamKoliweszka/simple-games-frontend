import * as UsersActions from "./user-of-service-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UserOfServiceState {
  accessToken: string;
  refreshToken: string;
}

const initialState: UserOfServiceState = {
  accessToken: null,
  refreshToken: null,
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
  }))
);

export function reducer(state: UserOfServiceState | undefined, action: Action) {
  return userOfServiceReducer(state, action);
}
