import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfflineWarGameStateModule } from "./offline-war-game-state/offline-war-game-state.module";
import { OfflineWarGameRoutingModule } from "./offline-war-game-routing.module";
import { GamePageComponent } from "./game-page/game-page.component";
import { CardsBarModule } from "../cards/components/cards-bar/cards-bar.module";
import { TopGameBarModule } from "../../components/top-game-bar/top-game-bar.module";
import { PlayersPreviewModule } from "../../components/players-preview/players-preview.module";
import { GameContentModule } from "./game-content/game-content.module";

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    OfflineWarGameStateModule,
    OfflineWarGameRoutingModule,
    CardsBarModule,
    TopGameBarModule,
    PlayersPreviewModule,
    GameContentModule,
  ],
})
export class OfflineWarGameModule {}
