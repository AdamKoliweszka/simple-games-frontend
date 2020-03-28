import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../modules/material/material.module";
import { SideBarComponent } from "./side-bar.component";

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SideBarComponent]
})
export class SideBarModule {}
