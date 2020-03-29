import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesListItemModule } from "./games-list-item/games-list-item.module";
import { GamesListComponent } from "./games-list.component";

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, GamesListItemModule],
  exports: [GamesListComponent]
})
export class GamesListModule {}
