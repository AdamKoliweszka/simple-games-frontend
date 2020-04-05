import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GameSelectPageComponent } from "./game-select-page.component";
import { ExitGameGuardService } from "../../modules/exit-game-dialog/guard/exit-game-guard.service";
import { ExitGameDialogModule } from "../../modules/exit-game-dialog/exit-game-dialog.module";

const routes: Routes = [
  {
    path: "",
    component: GameSelectPageComponent
  },
  {
    path: "war-game",
    loadChildren: () =>
      import("../../modules/offline-war-game/offline-war-game.module").then(
        m => m.OfflineWarGameModule
      ),
    canDeactivate: [ExitGameGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ExitGameDialogModule],
  exports: [RouterModule]
})
export class GameSelectPageRoutingModule {}
