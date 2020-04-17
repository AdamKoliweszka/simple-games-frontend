import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayersPreviewComponent } from "./players-preview.component";
import { PlayerPreviewModule } from "./player-preview/player-preview.module";

@NgModule({
  declarations: [PlayersPreviewComponent],
  imports: [CommonModule, PlayerPreviewModule],
  exports: [PlayersPreviewComponent],
})
export class PlayersPreviewModule {}
