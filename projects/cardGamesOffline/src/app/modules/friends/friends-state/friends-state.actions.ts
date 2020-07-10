import { createAction, props } from "@ngrx/store";

export const loadAllUsers = createAction("[FRIENDS] Load all users from Api");

export const initAllUsers = createAction(
  "[FRIENDS] Init all users",
  props<{ users }>()
);

export const loadAllFriends = createAction(
  "[FRIENDS] Load all friends from Api"
);

export const initAllFriends = createAction(
  "[FRIENDS] Init all friends",
  props<{ friends }>()
);
