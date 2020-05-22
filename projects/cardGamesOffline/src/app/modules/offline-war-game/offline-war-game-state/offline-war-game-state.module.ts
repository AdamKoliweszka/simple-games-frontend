import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromGames from "./offline-war-game-state.reducers";
import { StoreModule } from "@ngrx/store";
import { gamesStateKey } from "./offline-war-game-state.key";
import { EffectsModule } from "@ngrx/effects";
import { WarGameEffect } from "./offline-war-game-state.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(gamesStateKey, fromGames.reducer),
    EffectsModule.forFeature([WarGameEffect]),
  ],
})
export class OfflineWarGameStateModule {}
