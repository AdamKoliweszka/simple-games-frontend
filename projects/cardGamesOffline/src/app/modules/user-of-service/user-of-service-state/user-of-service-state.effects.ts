import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { withLatestFrom, tap, mergeMap, map } from "rxjs/operators";

import { Store, select } from "@ngrx/store";

import { UserOfServiceState } from "./user-of-service-state.reducers";
import {
  loginUser,
  setAccessToken,
  setRefreshToken,
  loadTokens,
  logoutUser,
} from "./user-of-service-state.actions";
import { AuthApiService } from "../services/auth-api.service";
import { AuthStorageContainerService } from "../services/auth-storage-container.service";
import { Router } from "@angular/router";

@Injectable()
export class UserOfServiceEffect {
  constructor(
    private action: Actions,
    private usersStore: Store<UserOfServiceState>,
    private authApiService: AuthApiService,
    private authStorageService: AuthStorageContainerService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.action.pipe(
    ofType(loginUser),
    mergeMap((action) => {
      return this.authApiService.loginUser(action.user).pipe(
        mergeMap((value) => {
          this.authStorageService.setAccessToken(value.accessToken);
          this.authStorageService.setRefreshToken(value.refreshToken);
          return [
            setAccessToken({ accessToken: value.accessToken }),
            setRefreshToken({ refreshToken: value.refreshToken }),
          ];
        })
      );
    })
  );

  @Effect()
  loadTokens$ = this.action.pipe(
    ofType(loadTokens),
    mergeMap((action) => {
      let accessToken = this.authStorageService.accessToken;
      let refreshToken = this.authStorageService.refreshToken;
      if (accessToken && refreshToken) {
        return [
          setAccessToken({ accessToken }),
          setRefreshToken({ refreshToken }),
        ];
      } else return [];
    })
  );

  @Effect({ dispatch: false })
  setRefreshToken$ = this.action.pipe(
    ofType(setRefreshToken),
    map((action) => {
      this.router.navigate([""]);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action.pipe(
    ofType(logoutUser),
    map((action) => {
      this.authStorageService.removeAccessToken();
      this.authStorageService.removeRefreshToken();
      this.router.navigate(["login"]);
    })
  );
}
