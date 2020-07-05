import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardContainerComponent } from "./card-container.component";
import { CardModule } from "../card/card.module";

@NgModule({
  declarations: [CardContainerComponent],
  imports: [CommonModule, CardModule],
  exports: [CardContainerComponent],
})
export class CardContainerModule {}
