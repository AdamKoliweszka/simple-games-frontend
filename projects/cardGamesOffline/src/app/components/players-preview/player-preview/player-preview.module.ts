import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlayerPreviewComponent } from "./player-preview.component";
import { MaterialModule } from "../../../modules/material/material.module";

@NgModule({
  declarations: [PlayerPreviewComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PlayerPreviewComponent],
})
export class PlayerPreviewModule {}
