import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "../card/card.module";
import { CardsCollectionComponent } from "./cards-collection.component";
import { MaterialModule } from "../../../material/material.module";

@NgModule({
  declarations: [CardsCollectionComponent],
  imports: [CommonModule, CardModule, MaterialModule],
  exports: [CardsCollectionComponent]
})
export class CardsCollectionModule {}
