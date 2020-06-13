import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserRegisterPageComponent } from "./user-register-page.component";

const routes: Routes = [
  {
    path: "",
    component: UserRegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRegisterPageRoutingModule {}
