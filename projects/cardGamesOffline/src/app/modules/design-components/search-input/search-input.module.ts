import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchInputComponent } from "./search-input.component";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SearchInputComponent],
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  exports: [SearchInputComponent],
})
export class SearchInputModule {}
