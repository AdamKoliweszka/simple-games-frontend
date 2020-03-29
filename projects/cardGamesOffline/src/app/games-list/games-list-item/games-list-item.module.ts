import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../modules/material/material.module";
import { GamesListItemComponent } from "./games-list-item.component";

@NgModule({
  declarations: [GamesListItemComponent],
  imports: [CommonModule, MaterialModule],
  exports: [GamesListItemComponent]
})
export class GamesListItemModule {}
