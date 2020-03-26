import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { MaterialModule } from "../../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomePageRoutingModule } from "./home-page-routing.module";

@NgModule({
  declarations: [HomePageComponent, UserFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule {}
