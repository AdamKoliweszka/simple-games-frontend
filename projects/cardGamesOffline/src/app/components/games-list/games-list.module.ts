import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesListComponent } from "./games-list.component";
import { CardModule } from "../../modules/design-components/card/card.module";

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, CardModule],
  exports: [GamesListComponent],
})
export class GamesListModule {}
