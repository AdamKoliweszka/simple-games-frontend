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

export const logoutUser = createAction(
  "[User_Of_Service] Start process of logout of user"
);
