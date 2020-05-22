import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceFormComponent } from "./user-of-service-form.component";
import { MaterialModule } from "../../material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserOfServiceFormComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule],
  exports: [UserOfServiceFormComponent],
})
export class UserOfServiceFormModule {}
