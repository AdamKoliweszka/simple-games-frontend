import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { MaterialModule } from "../../../material/material.module";
import { CardValuePipe } from "../../pipes/card-value.pipe";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [CardComponent, CardValuePipe],
  imports: [CommonModule, MaterialModule, TranslateModule],
  exports: [CardComponent],
  providers: [CardValuePipe]
})
export class CardModule {}
