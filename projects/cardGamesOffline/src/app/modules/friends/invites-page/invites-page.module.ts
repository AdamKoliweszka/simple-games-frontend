import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvitesPageComponent } from "./invites-page.component";
import { LineSeparatorModule } from "../../design-components/line-separator/line-separator.module";

@NgModule({
  declarations: [InvitesPageComponent],
  imports: [CommonModule, LineSeparatorModule],
})
export class InvitesPageModule {}
