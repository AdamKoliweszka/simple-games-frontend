import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeSideBarComponent } from "./home-side-bar.component";

@NgModule({
  declarations: [HomeSideBarComponent],
  imports: [CommonModule],
  exports: [HomeSideBarComponent],
})
export class HomeSideBarModule {}
