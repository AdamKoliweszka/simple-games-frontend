import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";
import { OfflinePlayersDataContainerService } from "../../../modules/offline-players-state/services/offline-players-data-container.service";
import { take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GameSelectPageRouteGuardService implements CanLoad {
  constructor(
    private playersDataContainerService: OfflinePlayersDataContainerService,
    private router: Router
  ) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.playersDataContainerService
      .isNumberOfPlayersEqualTo(2)
      .pipe(take(1), tap());
  }
}
