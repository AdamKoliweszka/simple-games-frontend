import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameSelectPageComponent } from "./game-select-page.component";
import { GameSelectPageRoutingModule } from "./game-select-page-routing.module";

@NgModule({
  declarations: [GameSelectPageComponent],
  imports: [CommonModule, GameSelectPageRoutingModule]
})
export class GameSelectPageModule {}
