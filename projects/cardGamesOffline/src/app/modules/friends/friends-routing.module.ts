import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FriendsPageComponent } from "./friends-page/friends-page.component";

const routes: Routes = [
  {
    path: "",
    component: FriendsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
