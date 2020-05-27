import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceStateModule } from "./user-of-service-state/user-of-service-state.module";
import { UserOfServiceRoutingModule } from "./user-of-service-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UserOfServiceRoutingModule],
})
export class UserOfServiceModule {}
