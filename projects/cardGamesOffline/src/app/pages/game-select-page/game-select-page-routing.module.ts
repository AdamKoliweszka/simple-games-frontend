import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GameSelectPageComponent } from "./game-select-page.component";
import { ExitGameGuardService } from "./guard/exit-game-guard.service";

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ExitGameGuardService]
})
export class GameSelectPageRoutingModule {}
