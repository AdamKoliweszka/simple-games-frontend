import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "games",
    loadChildren: () =>
      import("./pages/game-select-page/game-select-page.module").then(
        (m) => m.GameSelectPageModule
      ),
  },
  // {
  //   path: "404",
  //   loadChildren: () =>
  //     import("./pages/not-found-page/not-found-page.module").then(
  //       m => m.NotFoundPageModule
  //     )
  // },
  // { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
