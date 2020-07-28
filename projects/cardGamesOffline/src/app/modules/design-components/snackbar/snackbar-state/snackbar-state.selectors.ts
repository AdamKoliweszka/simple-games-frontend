import { SnackbarState } from "./snackbar-state.reducers";
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { snackbarStateKey } from "./snackbar-state.key";

export const selectSnackbarState = createFeatureSelector<SnackbarState>(
  snackbarStateKey
);

export const selectSnackbarMessages = createSelector(
  selectSnackbarState,
  (state) => state.messages
);
