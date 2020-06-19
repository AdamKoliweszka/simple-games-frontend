import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsLogedGuardService } from "./modules/user-of-service/guards/is-loged-guard.service";
import { IsNotLogedGuardService } from "./modules/user-of-service/guards/is-not-loged-guard.service";

const routes: Routes = [
  {
    path: "games",
    loadChildren: () =>
      import("./pages/game-select-page/game-select-page.module").then(
        (m) => m.GameSelectPageModule
      ),
    canActivate: [IsLogedGuardService],
  },
  {
    path: "messages",
    loadChildren: () =>
      import("./modules/messages/messages.module").then(
        (m) => m.MessagesModule
      ),
    canActivate: [IsLogedGuardService],
  },
  {
    path: "logout",
    loadChildren: () =>
      import("./modules/logout-page/logout-page.module").then(
        (m) => m.LogoutPageModule
      ),
    canActivate: [IsLogedGuardService],
  },
  // {
  //   path: "404",
  //   loadChildren: () =>
  //     import("./pages/not-found-page/not-found-page.module").then(
  //       (m) => m.NotFoundPageModule
  //     ),
  // },
  {
    path: "users",
    loadChildren: () =>
      import("./modules/user-of-service/user-of-service.module").then(
        (m) => m.UserOfServiceModule
      ),
    canActivate: [IsNotLogedGuardService],
  },
  { path: "", redirectTo: "games", pathMatch: "full" },
  { path: "**", redirectTo: "/404" },
  { path: "login", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLogedGuardService, IsNotLogedGuardService],
})
export class AppRoutingModule {}
