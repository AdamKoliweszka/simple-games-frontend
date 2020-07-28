import { createAction, props } from "@ngrx/store";

import { SnackbarMessage } from "../interfaces/snackbar-message.interface";

export const addSnackbarMessage = createAction(
  "[SNACKBAR] Add snackbar message",
  props<{ message: SnackbarMessage }>()
);
