import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { UsersState } from "../users-state.reducers";
import { User } from "../models/user";
import * as UsersActions from "../users-state.actions";
import * as UsersSelectors from "../users-state.selectors";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersDataContainerService {
  constructor(private store: Store<UsersState>) {}

  initFirstUser(firstUser: User) {
    this.store.dispatch(UsersActions.initFirstUser({ firstUser }));
  }

  initSecondUser(secondUser: User) {
    this.store.dispatch(UsersActions.initSecondUser({ secondUser }));
  }

  initPoints(points: number) {
    this.store.dispatch(UsersActions.initPoints({ points }));
  }

  setActiveUser(activeUser: User) {
    this.store.dispatch(UsersActions.changeActiveUser({ activeUser }));
  }

  get firstUser(): Observable<User> {
    return this.store.select(UsersSelectors.selectFirstUser);
  }

  get secondUser(): Observable<User> {
    return this.store.select(UsersSelectors.selectSecondUser);
  }

  get pointsFirstUser(): Observable<number> {
    return this.store.select(UsersSelectors.selectPointsFirstUser);
  }

  get pointsSecondUser(): Observable<number> {
    return this.store.select(UsersSelectors.selectPointsSecondUser);
  }

  get isUsersInit(): Observable<boolean> {
    return this.store.select(UsersSelectors.selectIsUsersInit);
  }

  get activeUser(): Observable<User> {
    return this.store.select(UsersSelectors.selectActiveUser);
  }
}
