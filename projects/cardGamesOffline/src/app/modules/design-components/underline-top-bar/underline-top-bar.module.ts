import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnderlineTopBarComponent } from "./underline-top-bar.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [UnderlineTopBarComponent],
  imports: [CommonModule, TranslateModule],
  exports: [UnderlineTopBarComponent],
})
export class UnderlineTopBarModule {}
