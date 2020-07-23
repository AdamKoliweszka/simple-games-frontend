import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFriendsComponent } from "./user-friends.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";
import { UsernamesPipe } from "../../names-pipe/usernames.pipe";
import { FriendsPipeModule } from "../pipes/friends-pipe.module";
import { CardContainerModule } from "../../design-components/card-container/card-container.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [UserFriendsComponent],
  imports: [
    CommonModule,
    SearchInputModule,
    FriendsPipeModule,
    CardContainerModule,
    SearchInputModule,
    TranslateModule,
  ],
})
export class UserFriendsModule {}
