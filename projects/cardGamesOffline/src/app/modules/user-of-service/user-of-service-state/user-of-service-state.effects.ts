import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { withLatestFrom, tap, mergeMap, map, catchError } from "rxjs/operators";

import { Store, select } from "@ngrx/store";

import { UserOfServiceState } from "./user-of-service-state.reducers";
import {
  loginUser,
  setAccessToken,
  setRefreshToken,
  loadTokens,
  logoutUser,
  refreshAccessToken,
  setRefreshingFlag,
  tryRefreshAccessToken,
  setIsLastLoginBad,
  setIsInLoginProcess,
  registerUser,
  setIsInRegisterProcess,
  setRegisterErrors,
} from "./user-of-service-state.actions";
import { AuthApiService } from "../services/auth-api.service";
import { AuthStorageContainerService } from "../services/auth-storage-container.service";
import { Router } from "@angular/router";
import {
  selectRefreshToken,
  selectAccessToken,
  selectIsRefreshFlag,
} from "./users-of-service.selectors";
import { EMPTY, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { UsersApiService } from "../services/users-api.service";

@Injectable()
export class UserOfServiceEffect {
  constructor(
    private action: Actions,
    private usersStore: Store<UserOfServiceState>,
    private authApiService: AuthApiService,
    private usersApiService: UsersApiService,
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
            setIsLastLoginBad({ isLastLoginBad: false }),
            setIsInLoginProcess({ isInLoginProcess: false }),
          ];
        }),
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 401)
            return [
              setIsLastLoginBad({ isLastLoginBad: true }),
              setIsInLoginProcess({ isInLoginProcess: false }),
            ];
          return throwError(error);
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
      // this.router.navigate(["/"]);
    })
  );

  @Effect({ dispatch: false })
  logout$ = this.action.pipe(
    ofType(logoutUser),
    map((action) => {
      let refreshToken = this.authStorageService.refreshToken;
      this.authApiService.logoutUser(refreshToken).subscribe((value) => {});
      this.authStorageService.removeAccessToken();
      this.authStorageService.removeRefreshToken();
      this.router.navigate(["/login"]);
    })
  );

  @Effect()
  tryRefreshAccessToken$ = this.action.pipe(
    ofType(tryRefreshAccessToken),
    withLatestFrom(
      this.usersStore.select(selectRefreshToken),
      this.usersStore.select(selectAccessToken),
      this.usersStore.select(selectIsRefreshFlag)
    ),
    mergeMap(([action, refreshToken, accessToken, isRefreshFlag]) => {
      if (action.accessToken !== accessToken || isRefreshFlag) return EMPTY;
      return [setRefreshingFlag({ refreshFlag: true }), refreshAccessToken()];
    })
  );

  @Effect()
  refreshAccessToken$ = this.action.pipe(
    ofType(refreshAccessToken),
    withLatestFrom(this.usersStore.select(selectRefreshToken)),
    mergeMap(([action, refreshToken]) => {
      return this.authApiService.refreshAccessToken(refreshToken).pipe(
        mergeMap((value) => {
          this.authStorageService.setAccessToken(value.accessToken);
          return [
            setAccessToken({ accessToken: value.accessToken }),
            setRefreshingFlag({ refreshFlag: false }),
          ];
        })
      );
    })
  );

  @Effect()
  registerUser$ = this.action.pipe(
    ofType(registerUser),
    mergeMap((value) => {
      return this.usersApiService.registerUser(value.user).pipe(
        map((value) => {
          return setIsInRegisterProcess({ isInRegisterProcess: false });
        }),
        catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 422) {
            return [
              setRegisterErrors({ registerErrors: error.error.errors }),
              setIsInLoginProcess({ isInLoginProcess: false }),
            ];
          }
          return throwError(error);
        })
      );
    })
  );
}
