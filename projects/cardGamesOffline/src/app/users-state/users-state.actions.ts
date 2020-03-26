import { createAction, props } from "@ngrx/store";
import { User } from "projects/cardGamesOffline/src/app/users-state/user";

export const initFirstUser = createAction(
  "[USERS] Add first user",
  props<{ firstUser: User }>()
);
export const initSecondUser = createAction(
  "[USERS] Add second user",
  props<{ secondUser: User }>()
);
