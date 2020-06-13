import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRegisterPageComponent } from "./user-register-page.component";
import { HomeSideBarModule } from "../../../components/home-side-bar/home-side-bar.module";
import { UserRegisterPageRoutingModule } from "./user-register-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { UserRegisterFormModule } from "../user-register-form/user-register-form.module";
import { LoadSpinnerModule } from "../load-spinner/load-spinner.module";
import { MaterialModule } from "../../material/material.module";
@NgModule({
  declarations: [UserRegisterPageComponent],
  imports: [
    CommonModule,
    UserRegisterFormModule,
    HomeSideBarModule,
    UserRegisterPageRoutingModule,
    TranslateModule,
    LoadSpinnerModule,
    MaterialModule,
  ],
})
export class UserRegisterPageModule {}
