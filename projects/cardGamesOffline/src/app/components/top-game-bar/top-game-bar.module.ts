import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopGameBarComponent } from "./top-game-bar.component";
import { MaterialModule } from "../../modules/material/material.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TopGameBarComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [TopGameBarComponent]
})
export class TopGameBarModule {}
