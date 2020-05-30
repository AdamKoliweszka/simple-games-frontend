import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLoginFormComponent } from "./user-login-form.component";
import { MaterialModule } from "../../material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserLoginFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [UserLoginFormComponent],
})
export class UserLoginFormModule {}
