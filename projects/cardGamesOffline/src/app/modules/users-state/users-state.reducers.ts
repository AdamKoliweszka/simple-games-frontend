import { User } from "./models/user";
import * as UsersActions from "./users-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UsersState {
  firstUser: User;
  secondUser: User;
}

const initialState: UsersState = {
  firstUser: { name: "di" } as User,
  secondUser: null
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
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
