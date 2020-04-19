import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GamePageComponent } from "./game-page/game-page.component";
import { OfflinePlayersLoadRouteGuardService } from "../offline-players/guard/offline-players-load-route-guard.service";
import { OfflinePlayersPageComponent } from "../offline-players/offline-players-page/offline-players-page.component";

const routes: Routes = [
  {
    path: "play",
    component: GamePageComponent,
    canActivate: [OfflinePlayersLoadRouteGuardService],
  },
  {
    path: "",
    component: OfflinePlayersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [OfflinePlayersLoadRouteGuardService],
})
export class OfflineWarGameRoutingModule {}
