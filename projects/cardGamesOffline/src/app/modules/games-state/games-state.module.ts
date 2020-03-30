import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromGames from "./games-state.reducers";
import { StoreModule } from "@ngrx/store";
import { gamesStateKey } from "./games-state.key";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(gamesStateKey, fromGames.reducer)
  ]
})
export class GamesStateModule {}
