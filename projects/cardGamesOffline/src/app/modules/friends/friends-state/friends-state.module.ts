import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromFriends from "./friends-state.reducers";
import { StoreModule } from "@ngrx/store";
import { friendsStateKey } from "./friends-state.key";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(friendsStateKey, fromFriends.reducer),
  ],
})
export class FriendsStateModule {}
