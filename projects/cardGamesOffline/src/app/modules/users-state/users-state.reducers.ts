import { User } from "./models/user";
import * as UsersActions from "./users-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UsersState {
  firstUser: User;
  secondUser: User;
  activeUser: User;
}

const initialState: UsersState = {
  firstUser: null,
  secondUser: null,
  activeUser: null
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.initFirstUser, (state, { firstUser }) => ({
    ...state,
    firstUser: firstUser
  })),
  on(UsersActions.initSecondUser, (state, { secondUser }) => ({
    ...state,
    secondUser: secondUser
  })),
  on(UsersActions.changeActiveUser, (state, { activeUser }) => ({
    ...state,
    activeUser: activeUser
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
