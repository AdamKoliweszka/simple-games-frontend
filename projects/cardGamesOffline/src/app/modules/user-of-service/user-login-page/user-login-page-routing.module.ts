import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserLoginPageComponent } from "./user-login-page.component";

const routes: Routes = [
  {
    path: "",
    component: UserLoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLoginPageRoutingModule {}
