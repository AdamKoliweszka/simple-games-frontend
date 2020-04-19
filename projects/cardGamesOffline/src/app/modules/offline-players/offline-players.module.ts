import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfflinePlayersStateModule } from "./offline-players-state/offline-players-state.module";
import { OfflinePlayersPageModule } from "./offline-players-page/offline-players-page.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, OfflinePlayersStateModule, OfflinePlayersPageModule],
  providers: [],
})
export class OfflinePlayersModule {}
