import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { MaterialModule } from "../../modules/material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from "./home-page-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { UserOfServiceModule } from "../../modules/user-of-service/user-of-service.module";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UserOfServiceModule,
    HomePageRoutingModule,
    TranslateModule,
  ],
})
export class HomePageModule {}
