import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, SearchInputModule],
})
export class UsersModule {}
