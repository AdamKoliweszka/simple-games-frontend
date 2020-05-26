import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLoginFormModule } from "../user-login-form/user-login-form.module";
import { UserOfServicePageComponent } from "./user-of-service-page.component";
import { HomeSideBarModule } from "../../../components/home-side-bar/home-side-bar.module";
import { UserOfServicePageRoutingModule } from "./user-of-service-page-routing.module";

@NgModule({
  declarations: [UserOfServicePageComponent],
  imports: [
    CommonModule,
    UserLoginFormModule,
    HomeSideBarModule,
    UserOfServicePageRoutingModule,
  ],
})
export class UserOfServicePageModule {}
