import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromPlayers from "./offline-players-state.reducers";
import { StoreModule } from "@ngrx/store";
import { offlinePlayersStateKey } from "./offline-players-state.key";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(offlinePlayersStateKey, fromPlayers.reducer),
  ],
})
export class OfflinePlayersStateModule {}
