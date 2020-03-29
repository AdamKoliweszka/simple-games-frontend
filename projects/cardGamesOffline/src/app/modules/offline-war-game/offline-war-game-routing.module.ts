import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GamePageComponent } from "./game-page/game-page.component";

const routes: Routes = [
  {
    path: "",
    component: GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflineWarGameRoutingModule {}
