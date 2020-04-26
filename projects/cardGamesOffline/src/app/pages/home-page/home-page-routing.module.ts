import { HomePageComponent } from "./home-page.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { UserOfServicePageComponent } from "../../modules/user-of-service/user-of-service-page/user-of-service-page.component";

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
export class HomePageRoutingModule {}
