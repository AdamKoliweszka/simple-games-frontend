import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FriendsPageComponent } from "./friends-page/friends-page.component";
import { UserFriendsComponent } from "./user-friends/user-friends.component";
import { UsersComponent } from "./users/users.component";
import { InvitesPageComponent } from "./invites-page/invites-page.component";

const routes: Routes = [
  { path: "", redirectTo: "users" },
  {
    path: "",
    component: FriendsPageComponent,
    children: [
      {
        path: "user-friends",
        component: UserFriendsComponent,
      },
      { path: "users", component: UsersComponent },
      {
        path: "invites",
        component: InvitesPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
