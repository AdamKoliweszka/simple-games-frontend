import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceFormModule } from "../user-of-service-form/user-of-service-form.module";
import { UserOfServicePageComponent } from "./user-of-service-page.component";

@NgModule({
  declarations: [UserOfServicePageComponent],
  imports: [CommonModule, UserOfServiceFormModule],
})
export class UserOfServicePageModule {}
