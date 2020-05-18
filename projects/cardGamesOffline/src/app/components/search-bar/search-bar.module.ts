import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "./search-bar.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, TranslateModule],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
