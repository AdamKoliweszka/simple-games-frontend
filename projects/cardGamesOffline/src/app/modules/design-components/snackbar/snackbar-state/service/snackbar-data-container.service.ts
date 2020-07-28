import { Injectable } from "@angular/core";
import { SnackbarState } from "../snackbar-state.reducers";
import { Store } from "@ngrx/store";
import { SnackbarMessage } from "../../interfaces/snackbar-message.interface";
import { Observable } from "rxjs";
import * as SnackbarSelectors from "../snackbar-state.selectors";
import * as SnackbarActions from "../snackbar-state.actions";

@Injectable({
  providedIn: "root",
})
export class SnackbarDataContainerService {
  constructor(private store: Store<SnackbarState>) {}

  get listOfMessages(): Observable<SnackbarMessage[]> {
    return this.store.select(SnackbarSelectors.selectSnackbarMessages);
  }

  addMessage(message: SnackbarMessage) {
    this.store.dispatch(SnackbarActions.addSnackbarMessage({ message }));
  }
}
