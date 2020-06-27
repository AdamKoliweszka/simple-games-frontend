import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendsRoutingModule } from "./friends-routing.module";
import { FriendsPageModule } from "./friends-page/friends-page.module";
import { UsersModule } from "./users/users.module";
import { UserFriendsModule } from "./user-friends/user-friends.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    FriendsPageModule,
    UsersModule,
    UserFriendsModule,
  ],
})
export class FriendsModule {}
