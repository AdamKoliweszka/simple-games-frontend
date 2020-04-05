import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { GameSelectPageComponent } from "../../../pages/game-select-page/game-select-page.component";
import { ExitGameDialogService } from "../service/exit-game-dialog.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExitGameGuardService
  implements CanDeactivate<GameSelectPageComponent> {
  constructor(private service: ExitGameDialogService) {}
  canDeactivate(
    component: GameSelectPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.service.openDialog();
  }
}
