import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromFriends from "./friends-state.reducers";
import { StoreModule } from "@ngrx/store";
import { friendsStateKey } from "./friends-state.key";
import { FriendsStateEffect } from "./friends-state.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(friendsStateKey, fromFriends.reducer),
    EffectsModule.forFeature([FriendsStateEffect]),
  ],
})
export class FriendsStateModule {}
