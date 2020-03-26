import { NgModule } from "@angular/core";
import { CardsComponent } from "./cards.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [CardsComponent, CardComponent],
  imports: [],
  exports: [CardsComponent]
})
export class CardsModule {}
