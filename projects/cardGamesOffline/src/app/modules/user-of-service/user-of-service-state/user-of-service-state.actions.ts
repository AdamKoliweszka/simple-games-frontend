import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";

export const setAccessToken = createAction(
  "[User_Of_Service] Set access token",
  props<{ accessToken: string }>()
);

export const setRefreshToken = createAction(
  "[User_Of_Service] Set refresh token",
  props<{ refreshToken: string }>()
);

export const loadTokens = createAction(
  "[User_Of_Service] Load tokens from local storage"
);

export const loginUser = createAction(
  "[User_Of_Service] Start process of login of user",
  props<{ user: User }>()
);

export const registerUser = createAction(
  "[User_Of_Service] Start process of register of user",
  props<{ user: User }>()
);

export const logoutUser = createAction(
  "[User_Of_Service] Start process of logout of user"
);

export const tryRefreshAccessToken = createAction(
  "[User_Of_Service] Check if refresh access token is needed and dispatch refresh",
  props<{ accessToken: string }>()
);

export const refreshAccessToken = createAction(
  "[User_Of_Service] Refresh access token"
);

export const setRefreshingFlag = createAction(
  "[User_Of_Service] Set refresh flag of access token",
  props<{ refreshFlag: boolean }>()
);

export const setIsLastLoginBad = createAction(
  "[User_Of_Service] Set flag of last login",
  props<{ isLastLoginBad: boolean }>()
);

export const setIsInLoginProcess = createAction(
  "[User_Of_Service] Set flag of login process",
  props<{ isInLoginProcess: boolean }>()
);

export const setIsInRegisterProcess = createAction(
  "[User_Of_Service] Set flag of register process",
  props<{ isInRegisterProcess: boolean }>()
);

export const setRegisterErrors = createAction(
  "[User_Of_Service] Set register errors",
  props<{ registerErrors: string[] }>()
);
