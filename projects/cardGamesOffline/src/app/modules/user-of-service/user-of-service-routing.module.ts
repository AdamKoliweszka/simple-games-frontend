import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./user-login-page/user-login-page.module").then(
        (m) => m.UserLoginPageModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./user-login-page/user-login-page.module").then(
        (m) => m.UserLoginPageModule
      ),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOfServiceRoutingModule {}
