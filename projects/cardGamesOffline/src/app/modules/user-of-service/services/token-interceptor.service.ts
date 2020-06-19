import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable, throwError } from "rxjs";
import { take, mergeMap, catchError, takeWhile, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authService.accessToken.pipe(
      take(1),
      mergeMap((accessToken) => {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (request.url.includes("login")) return next.handle(request);
        return next.handle(request).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401)
              return this.resendRequest(request, next, accessToken);
            return throwError(error);
          })
        );
      })
    );
  }

  private resendRequest(
    request: HttpRequest<any>,
    next: HttpHandler,
    previousAccessToken: string
  ) {
    this.authService.refreshAccessToken(previousAccessToken);
    return this.authService.accessToken.pipe(
      takeWhile((accessToken) => accessToken === previousAccessToken, true),
      filter(
        (accessToken) => accessToken && accessToken !== previousAccessToken
      ),
      mergeMap((accessToken) => {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return next.handle(request).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401)
              this.authService.logoutUser();
            return throwError(error);
          })
        );
      })
    );
  }
}
