import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { AuthStorageContainerService } from "./auth-storage-container.service";
import { AuthApiService } from "./auth-api.service";
import { UserOfServiceState } from "../user-of-service-state/user-of-service-state.reducers";
import { Store } from "@ngrx/store";
import * as UserActions from "../user-of-service-state/user-of-service-state.actions";
import * as UserSelectors from "../user-of-service-state/users-of-service.selectors";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private authStorageContainer: AuthStorageContainerService,
    private authApiService: AuthApiService,
    private store: Store<UserOfServiceState>
  ) {}

  get isLoged(): Observable<boolean> {
    return this.store.select(UserSelectors.selectIsUserLoged);
  }

  loginUser(user: User) {
    this.store.dispatch(UserActions.loginUser({ user }));
  }

  initTokens() {
    this.store.dispatch(UserActions.loadTokens());
  }
}
