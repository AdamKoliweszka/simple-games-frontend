import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceStateModule } from "./user-of-service-state/user-of-service-state.module";
import { UserOfServiceRoutingModule } from "./user-of-service-routing.module";
import { UserPageComponent } from "./user-page/user-page.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule, UserOfServiceRoutingModule, MaterialModule],
})
export class UserOfServiceModule {}
