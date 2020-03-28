import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesListItemComponent } from "./games-list-item/games-list-item.component";

@NgModule({
  declarations: [GamesListModule],
  imports: [CommonModule, GamesListItemComponent],
  exports: [GamesListModule]
})
export class GamesListModule {}
