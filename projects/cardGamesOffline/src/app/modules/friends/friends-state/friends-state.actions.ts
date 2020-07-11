import { createAction, props } from "@ngrx/store";

export const loadAllUsers = createAction("[FRIENDS] Load all users from Api");

export const initAllUsers = createAction(
  "[FRIENDS] Init all users",
  props<{ users }>()
);

export const loadAllFriendships = createAction(
  "[FRIENDS] Load all friendships from Api"
);

export const initAllFriendships = createAction(
  "[FRIENDS] Init all friendships",
  props<{ friendships }>()
);

export const inviteFriend = createAction(
  "[FRIENDS] Invite user to friend",
  props<{ friendUsername: string }>()
);
