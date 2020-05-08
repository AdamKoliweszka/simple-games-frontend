import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserOfServicePageComponent } from "./user-of-service-page.component";

const routes: Routes = [
  {
    path: "",
    component: UserOfServicePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserOfServicePageRoutingModule {}
