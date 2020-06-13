import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceRoutingModule } from "./user-of-service-routing.module";
import { UserPageComponent } from "./user-page/user-page.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [UserPageComponent],
  imports: [CommonModule, UserOfServiceRoutingModule, MaterialModule],
})
export class UserOfServiceModule {}
