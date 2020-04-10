import { User } from "./models/user";
import * as UsersActions from "./users-state.actions";
import { createReducer, on, Action } from "@ngrx/store";

export interface UsersState {
  firstUser: User;
  secondUser: User;
  activeUser: User;
  pointsFirstUser: number;
  pointsSecondUser: number;
}

const initialState: UsersState = {
  firstUser: null,
  secondUser: null,
  activeUser: null,
  pointsFirstUser: 0,
  pointsSecondUser: 0,
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.initFirstUser, (state, { firstUser }) => ({
    ...state,
    firstUser: firstUser,
  })),
  on(UsersActions.initSecondUser, (state, { secondUser }) => ({
    ...state,
    secondUser: secondUser,
  })),
  on(UsersActions.initActiveUser, (state, { activeUser }) => ({
    ...state,
    activeUser: activeUser,
  })),
  on(UsersActions.changeActiveUser, (state) => ({
    ...state,
    activeUser:
      state.activeUser.name === state.firstUser.name
        ? { ...state.secondUser }
        : { ...state.firstUser },
  })),
  on(UsersActions.initPoints, (state, { points }) => ({
    ...state,
    pointsFirstUser: points,
    pointsSecondUser: points,
  }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
