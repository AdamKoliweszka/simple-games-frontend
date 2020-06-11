import { Injectable } from "@angular/core";
import { UserOfServiceState } from "../user-of-service-state/user-of-service-state.reducers";
import { Store } from "@ngrx/store";
import { User } from "../models/user";
import * as UserActions from "../user-of-service-state/user-of-service-state.actions";
import * as UserSelectors from "../user-of-service-state/users-of-service.selectors";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private store: Store<UserOfServiceState>) {}

  registerUser(user: User): void {
    this.store.dispatch(UserActions.registerUser({ user }));
  }

  get isInRegisterProcess(): Observable<boolean> {
    return this.store.select(UserSelectors.selectIsInRegisterProcess);
  }

  get registerErrors(): Observable<string[]> {
    return this.store.select(UserSelectors.selectRegisterErrors);
  }
}
