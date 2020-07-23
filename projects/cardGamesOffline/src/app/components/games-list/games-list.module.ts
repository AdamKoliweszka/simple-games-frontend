import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesListComponent } from "./games-list.component";
import { CardContainerModule } from "../../modules/design-components/card-container/card-container.module";
import { NamesPipeModule } from "../../modules/names-pipe/names-pipe.module";

@NgModule({
  declarations: [GamesListComponent],
  imports: [CommonModule, CardContainerModule, NamesPipeModule],
  exports: [GamesListComponent],
})
export class GamesListModule {}
