import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GameSelectPageComponent } from "./game-select-page.component";

const routes: Routes = [
  {
    path: "",
    component: GameSelectPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameSelectPageRoutingModule {}
