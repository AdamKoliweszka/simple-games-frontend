import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendsPageComponent } from "./friends-page.component";
import { UnderlineTopBarModule } from "../../design-components/underline-top-bar/underline-top-bar.module";

@NgModule({
  declarations: [FriendsPageComponent],
  imports: [CommonModule, UnderlineTopBarModule],
})
export class FriendsPageModule {}
