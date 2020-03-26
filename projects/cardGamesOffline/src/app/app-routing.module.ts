import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserStartPageComponent } from "./user-start-page/user-start-page.component";

const routes: Routes = [{ path: "", component: UserStartPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
