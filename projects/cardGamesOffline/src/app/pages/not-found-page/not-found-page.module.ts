import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../modules/material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { NotFoundPageRoutingModule } from "./not-found-page-routing.module";
import { NotFoundPageComponent } from "./not-found-page.component";

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NotFoundPageRoutingModule,
    TranslateModule
  ]
})
export class NotFoundPageModule {}
