import * as UsersActions from "./user-of-service-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UserOfServiceState {
  accessToken: string;
  refreshToken: string;
  isRefreshing: boolean;
  isLastLoginBad: boolean;
  isInLoginProcess: boolean;
  isInRegisterProcess: boolean;
  registerErrors: string[];
}

const initialState: UserOfServiceState = {
  accessToken: null,
  refreshToken: null,
  isRefreshing: false,
  isLastLoginBad: false,
  isInLoginProcess: false,
  isInRegisterProcess: false,
  registerErrors: null,
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
  })),
  on(UsersActions.setIsLastLoginBad, (state, { isLastLoginBad }) => ({
    ...state,
    isLastLoginBad: isLastLoginBad,
  })),
  on(UsersActions.setIsInLoginProcess, (state, { isInLoginProcess }) => ({
    ...state,
    isInLoginProcess: isInLoginProcess,
  })),
  on(UsersActions.loginUser, (state) => ({
    ...state,
    isInLoginProcess: true,
  })),
  on(UsersActions.setIsInRegisterProcess, (state, { isInRegisterProcess }) => ({
    ...state,
    isInRegisterProcess: isInRegisterProcess,
  })),
  on(UsersActions.registerUser, (state) => ({
    ...state,
    isInRegisterProcess: true,
  })),
  on(UsersActions.setRegisterErrors, (state, { registerErrors }) => ({
    ...state,
    registerErrors: [...registerErrors],
  }))
);

export function reducer(state: UserOfServiceState | undefined, action: Action) {
  return userOfServiceReducer(state, action);
}
