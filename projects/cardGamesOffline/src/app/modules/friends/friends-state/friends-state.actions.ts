import { createAction, props } from "@ngrx/store";
import { Friendship } from "../interface/friendship.interface";
import { User } from "../../user-of-service/models/user";

export const loadAllUsers = createAction("[FRIENDS] Load all users from Api");

export const initAllUsers = createAction(
  "[FRIENDS] Init all users",
  props<{ users: User[] }>()
);

export const loadAllFriendships = createAction(
  "[FRIENDS] Load all friendships from Api"
);

export const initAllFriendships = createAction(
  "[FRIENDS] Init all friendships",
  props<{ friendships: Friendship[] }>()
);

export const addFriendship = createAction(
  "[FRIENDS] Add friendship",
  props<{ friendship: Friendship }>()
);

export const inviteFriend = createAction(
  "[FRIENDS] Invite user to friend",
  props<{ friendUsername: string }>()
);

export const acceptInviteToFriendship = createAction(
  "[FRIENDS] Accept invite to friendship",
  props<{ friendship: Friendship }>()
);

export const discardInviteToFriendship = createAction(
  "[FRIENDS] Discard invite to friendship",
  props<{ friendship: Friendship }>()
);

export const removeFriendship = createAction(
  "[FRIENDS] Remove friendship",
  props<{ friendship: Friendship }>()
);

export const editFriendship = createAction(
  "[FRIENDS] Edit friendship",
  props<{ friendship: Friendship }>()
);
