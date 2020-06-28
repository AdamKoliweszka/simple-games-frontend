import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendsRoutingModule } from "./friends-routing.module";
import { FriendsPageModule } from "./friends-page/friends-page.module";
import { UsersModule } from "./users/users.module";
import { UserFriendsModule } from "./user-friends/user-friends.module";
import { FriendsStateModule } from "./friends-state/friends-state.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    FriendsPageModule,
    UsersModule,
    UserFriendsModule,
    FriendsStateModule,
  ],
})
export class FriendsModule {}
