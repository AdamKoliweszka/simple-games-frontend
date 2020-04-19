import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { OfflinePlayersDataContainerService } from "../offline-players-state/services/offline-players-data-container.service";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OfflinePlayersLoadRouteGuardService implements CanActivate {
  constructor(
    private playersDataContainerService: OfflinePlayersDataContainerService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.playersDataContainerService.isNumberOfPlayersEqualTo(2).pipe(
      take(1),
      tap((value) => {
        if (!value) this.router.navigate([""]);
        console.log(value);
      })
    );
  }
}
