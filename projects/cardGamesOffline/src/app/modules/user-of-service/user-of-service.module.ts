import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserOfServiceStateModule } from "./user-of-service-state/user-of-service-state.module";
import { UserOfServiceFormModule } from "./user-of-service-form/user-of-service-form.module";
import { UserOfServicePageModule } from "./user-of-service-page/user-of-service-page.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserOfServiceStateModule,
    UserOfServiceFormModule,
    UserOfServiceStateModule,
    UserOfServicePageModule,
  ],
  exports: [UserOfServiceFormModule],
})
export class UserOfServiceModule {}
