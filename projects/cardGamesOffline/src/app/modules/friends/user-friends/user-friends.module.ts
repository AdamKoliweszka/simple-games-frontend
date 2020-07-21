import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFriendsComponent } from "./user-friends.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";
import { UsernamesPipe } from "../../names-pipe/usernames.pipe";
import { FriendsPipeModule } from "../pipes/friends-pipe.module";
import { CardContainerModule } from "../../design-components/card-container/card-container.module";

@NgModule({
  declarations: [UserFriendsComponent],
  imports: [
    CommonModule,
    SearchInputModule,
    FriendsPipeModule,
    CardContainerModule,
    SearchInputModule,
  ],
})
export class UserFriendsModule {}
