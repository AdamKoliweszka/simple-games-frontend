import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPreviewComponent } from "./user-preview.component";
import { MaterialModule } from "../../material/material.module";

@NgModule({
  declarations: [UserPreviewComponent],
  imports: [CommonModule, MaterialModule],
  exports: [UserPreviewComponent]
})
export class UserPreviewModule {}
