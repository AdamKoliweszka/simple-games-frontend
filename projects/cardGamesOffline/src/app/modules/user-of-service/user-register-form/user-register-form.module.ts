import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRegisterFormComponent } from "./user-register-form.component";
import { MaterialModule } from "../../material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserRegisterFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [UserRegisterFormComponent],
})
export class UserRegisterFormModule {}
