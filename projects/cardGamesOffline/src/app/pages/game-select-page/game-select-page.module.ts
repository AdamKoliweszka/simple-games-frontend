import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameSelectPageComponent } from "./game-select-page.component";
import { GameSelectPageRoutingModule } from "./game-select-page-routing.module";
import { SideBarModule } from "../../components/side-bar/side-bar.module";
import { GamesListModule } from "../../components/games-list/games-list.module";
import { GamesStateModule } from "../../modules/games-state/games-state.module";

@NgModule({
  declarations: [GameSelectPageComponent],
  imports: [
    CommonModule,
    GamesStateModule,
    GameSelectPageRoutingModule,
    SideBarModule,
    GamesListModule
  ]
})
export class GameSelectPageModule {}
