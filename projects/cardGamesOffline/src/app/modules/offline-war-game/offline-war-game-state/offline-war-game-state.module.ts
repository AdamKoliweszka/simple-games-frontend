import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromGames from "./offline-war-game-state.reducers";
import { StoreModule } from "@ngrx/store";
import { gamesStateKey } from "./offline-war-game-state.key";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(gamesStateKey, fromGames.reducer)
  ]
})
export class OfflineWarGameStateModule {}
