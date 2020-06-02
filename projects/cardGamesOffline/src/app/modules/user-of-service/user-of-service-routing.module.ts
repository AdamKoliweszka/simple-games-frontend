import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserPageComponent } from "./user-page/user-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "",
    component: UserPageComponent,
    children: [
      {
        path: "register",
        loadChildren: () =>
          import("./user-register-page/user-register-page.module").then(
            (m) => m.UserRegisterPageModule
          ),
      },
      {
        path: "login",
        loadChildren: () =>
          import("./user-login-page/user-login-page.module").then(
            (m) => m.UserLoginPageModule
          ),
      },
    ],
  },
  // {
  //   path: "login",
  //   loadChildren: () =>
  //     import("./user-login-page/user-login-page.module").then(
  //       (m) => m.UserLoginPageModule
  //     ),
  // },
  // {
  //   path: "register",
  //   loadChildren: () =>
  //     import("./user-register-page/user-register-page.module").then(
  //       (m) => m.UserRegisterPageModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOfServiceRoutingModule {}
