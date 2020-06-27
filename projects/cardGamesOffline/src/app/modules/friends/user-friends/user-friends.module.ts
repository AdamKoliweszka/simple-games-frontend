import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFriendsComponent } from "./user-friends.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";

@NgModule({
  declarations: [UserFriendsComponent],
  imports: [CommonModule, SearchInputModule],
})
export class UserFriendsModule {}
