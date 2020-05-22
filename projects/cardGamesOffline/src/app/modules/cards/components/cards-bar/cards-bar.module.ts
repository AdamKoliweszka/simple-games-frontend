import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardsCollectionModule } from "../cards-collection/cards-collection.module";
import { MaterialModule } from "../../../material/material.module";
import { CardsBarComponent } from "./cards-bar.component";

@NgModule({
  declarations: [CardsBarComponent],
  imports: [CommonModule, CardsCollectionModule, MaterialModule],
  exports: [CardsBarComponent]
})
export class CardsBarModule {}
