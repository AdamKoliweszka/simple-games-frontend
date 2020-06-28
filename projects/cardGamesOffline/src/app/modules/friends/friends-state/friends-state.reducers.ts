import * as GamesActions from "./friends-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface FriendsState {
  users;
}

const initialState: FriendsState = {
  users: null,
};

const friendsReducer = createReducer(
  initialState,
  on(GamesActions.initAllUsers, (state, { users }) => ({
    ...state,
    users,
  }))
);

export function reducer(state: FriendsState | undefined, action: Action) {
  return friendsReducer(state, action);
}
