import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoutPageComponent } from "./logout-page.component";
import { LoadSpinnerModule } from "../load-spinner/load-spinner.module";
import { LogoutPageRoutingModule } from "./logout-page-routing.module";

@NgModule({
  declarations: [LogoutPageComponent],
  imports: [CommonModule, LoadSpinnerModule, LogoutPageRoutingModule],
})
export class LogoutPageModule {}
