import * as SnackbarActions from "./snackbar-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { SnackbarMessage } from "../interfaces/snackbar-message.interface";

export interface SnackbarState {
  messages: SnackbarMessage[];
}

const initialState: SnackbarState = {
  messages: [],
};

const snackbarReducer = createReducer(
  initialState,
  on(SnackbarActions.addSnackbarMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  }))
);

export function reducer(state: SnackbarState | undefined, action: Action) {
  return snackbarReducer(state, action);
}
