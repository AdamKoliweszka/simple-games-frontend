import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UsersDataContainerService } from "../../../modules/users-state/services/users-data-container.service";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameSelectPageRouteGuardService implements CanLoad {
  constructor(
    private usersDataContainerService: UsersDataContainerService,
    private router: Router
  ) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.usersDataContainerService.isUsersInit.pipe(
      take(1),
      tap(value => {
        if (!value) {
          this.router.navigate([""]);
        }
      })
    );
  }
}
