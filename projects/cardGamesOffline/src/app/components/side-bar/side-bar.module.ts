import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../modules/material/material.module";
import { SideBarComponent } from "./side-bar.component";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, RouterModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}
