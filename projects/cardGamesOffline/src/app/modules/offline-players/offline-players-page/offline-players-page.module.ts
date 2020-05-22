import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfflinePlayersPageComponent } from "./offline-players-page.component";
import { OfflinePlayersFormModule } from "../offline-players-form/offline-players-form.module";

@NgModule({
  declarations: [OfflinePlayersPageComponent],
  imports: [CommonModule, OfflinePlayersFormModule],
  exports: [OfflinePlayersPageComponent],
})
export class OfflinePlayersPageModule {}
