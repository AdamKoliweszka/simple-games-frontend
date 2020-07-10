import * as GamesActions from "./friends-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { User } from "../../user-of-service/models/user";

export interface FriendsState {
  users: User[];
  friends: User[];
}

const initialState: FriendsState = {
  users: null,
  friends: null,
};

const friendsReducer = createReducer(
  initialState,
  on(GamesActions.initAllUsers, (state, { users }) => ({
    ...state,
    users,
  })),
  on(GamesActions.initAllFriends, (state, { friends }) => ({
    ...state,
    friends,
  }))
);

export function reducer(state: FriendsState | undefined, action: Action) {
  return friendsReducer(state, action);
}
