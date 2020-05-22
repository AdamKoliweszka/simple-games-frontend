import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameContentComponent } from "./game-content.component";
import { CardModule } from "../../cards/components/card/card.module";

@NgModule({
  declarations: [GameContentComponent],
  imports: [CommonModule, CardModule],
  exports: [GameContentComponent],
})
export class GameContentModule {}
