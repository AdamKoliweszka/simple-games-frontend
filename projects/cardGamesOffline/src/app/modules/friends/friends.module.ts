import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendsRoutingModule } from "./friends-routing.module";
import { FriendsPageModule } from "./friends-page/friends-page.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FriendsRoutingModule, FriendsPageModule],
})
export class FriendsModule {}
