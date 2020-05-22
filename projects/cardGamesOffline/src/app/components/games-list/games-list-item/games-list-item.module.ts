import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../modules/material/material.module";
import { GamesListItemComponent } from "./games-list-item.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [GamesListItemComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [GamesListItemComponent]
})
export class GamesListItemModule {}
