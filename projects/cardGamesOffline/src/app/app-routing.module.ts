import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IsLogedGuardService } from "./modules/user-of-service/guards/is-loged-guard.service";
import { IsNotLogedGuardService } from "./modules/user-of-service/guards/is-not-loged-guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/game-select-page/game-select-page.module").then(
        (m) => m.GameSelectPageModule
      ),
    canActivate: [IsLogedGuardService],
  },
  {
    path: "404",
    loadChildren: () =>
      import("./pages/not-found-page/not-found-page.module").then(
        (m) => m.NotFoundPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import(
        "./modules/user-of-service/user-of-service-page/user-of-service-page.module"
      ).then((m) => m.UserOfServicePageModule),
    canActivate: [IsNotLogedGuardService],
  },
  { path: "games", redirectTo: "" },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLogedGuardService, IsNotLogedGuardService],
})
export class AppRoutingModule {}
