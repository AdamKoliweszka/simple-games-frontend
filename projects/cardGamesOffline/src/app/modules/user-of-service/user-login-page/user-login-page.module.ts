import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLoginFormModule } from "../user-login-form/user-login-form.module";
import { UserLoginPageComponent } from "./user-login-page.component";
import { HomeSideBarModule } from "../../../components/home-side-bar/home-side-bar.module";
import { UserLoginPageRoutingModule } from "./user-login-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { LoadSpinnerModule } from "../load-spinner/load-spinner.module";
@NgModule({
  declarations: [UserLoginPageComponent],
  imports: [
    CommonModule,
    UserLoginFormModule,
    HomeSideBarModule,
    UserLoginPageRoutingModule,
    TranslateModule,
    LoadSpinnerModule,
  ],
})
export class UserLoginPageModule {}
