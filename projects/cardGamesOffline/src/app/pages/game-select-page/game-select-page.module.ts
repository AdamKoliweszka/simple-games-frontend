import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GameSelectPageComponent } from "./game-select-page.component";
import { GameSelectPageRoutingModule } from "./game-select-page-routing.module";
import { UsersPreviewModule } from "../../components/users-preview/users-preview.module";
import { SideBarModule } from "../../components/side-bar/side-bar.module";

@NgModule({
  declarations: [GameSelectPageComponent],
  imports: [
    CommonModule,
    GameSelectPageRoutingModule,
    UsersPreviewModule,
    SideBarModule
  ]
})
export class GameSelectPageModule {}
