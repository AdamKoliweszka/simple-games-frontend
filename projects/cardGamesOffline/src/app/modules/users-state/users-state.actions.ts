import { createAction, props } from "@ngrx/store";
import { User } from "projects/cardGamesOffline/src/app/modules/users-state/models/user";

export const initFirstUser = createAction(
  "[USERS] Add first user",
  props<{ firstUser: User }>()
);
export const initSecondUser = createAction(
  "[USERS] Add second user",
  props<{ secondUser: User }>()
);
export const initActiveUser = createAction(
  "[USERS] Add active user",
  props<{ activeUser: User }>()
);

export const changeActiveUser = createAction("[USERS] Change active user");

export const initPoints = createAction(
  "[USERS] Init points of Users",
  props<{ points: number }>()
);

export const addPointsToFirstUser = createAction(
  "[USERS] Add points to first User"
);

export const addPointsToSecondUser = createAction(
  "[USERS] Add points to second User"
);
