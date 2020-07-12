import * as GamesActions from "./friends-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { User } from "../../user-of-service/models/user";
import { Friendship } from "../interface/friendship.interface";

export interface FriendsState {
  users: User[];
  friendships: Friendship[];
}

const initialState: FriendsState = {
  users: [],
  friendships: [],
};

const friendsReducer = createReducer(
  initialState,
  on(GamesActions.initAllUsers, (state, { users }) => ({
    ...state,
    users,
  })),
  on(GamesActions.initAllFriendships, (state, { friendships }) => ({
    ...state,
    friendships,
  })),
  on(GamesActions.addFriendship, (state, { friendship }) => ({
    ...state,
    friendships: [...state.friendships, friendship],
  }))
);

export function reducer(state: FriendsState | undefined, action: Action) {
  return friendsReducer(state, action);
}
