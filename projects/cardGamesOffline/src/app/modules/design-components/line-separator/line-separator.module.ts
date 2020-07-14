import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LineSeparatorComponent } from "./line-separator.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LineSeparatorComponent],
  imports: [CommonModule, TranslateModule],
  exports: [LineSeparatorComponent],
})
export class LineSeparatorModule {}
