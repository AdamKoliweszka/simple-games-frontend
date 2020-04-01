import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { GameSelectPageComponent } from "../game-select-page.component";

@Injectable({
  providedIn: "root"
})
export class ExitGameGuardService
  implements CanDeactivate<GameSelectPageComponent> {
  canDeactivate(
    component: GameSelectPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): boolean {
    return false;
  }
  constructor() {}
}
