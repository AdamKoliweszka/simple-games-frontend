import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UnderlineTopBarModule } from "./underline-top-bar/underline-top-bar.module";
import { SearchInputModule } from "./search-input/search-input.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UnderlineTopBarModule, SearchInputModule],
})
export class DesignComponentsModule {}
