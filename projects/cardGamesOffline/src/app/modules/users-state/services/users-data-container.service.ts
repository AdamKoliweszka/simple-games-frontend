import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { UsersState } from "../users-state.reducers";
import { User } from "../models/user";
import * as UsersActions from "../users-state.actions";
import * as UsersSelectors from "../users-state.selectors";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersDataContainerService {
  constructor(private store: Store<UsersState>) {}

  initFirstUser(name: string) {
    let firstUser = { name: name } as User;
    this.store.dispatch(UsersActions.initFirstUser({ firstUser }));
  }

  initSecondUser(name: string) {
    let secondUser = { name: name } as User;
    this.store.dispatch(UsersActions.initSecondUser({ secondUser }));
  }

  get firstUser(): Observable<User> {
    return this.store.select(UsersSelectors.selectFirstUser);
  }

  get secondUser(): Observable<User> {
    return this.store.select(UsersSelectors.selectSecondUser);
  }

  get isUsersInit(): Observable<boolean> {
    return this.store.select(UsersSelectors.selectIsUsersInit);
  }
}
