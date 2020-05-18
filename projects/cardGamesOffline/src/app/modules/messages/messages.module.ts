import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesStartPageComponent } from "./messages-start-page/messages-start-page.component";
import { MessagesTopBarComponent } from "./messages-top-bar/messages-top-bar.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [MessagesStartPageComponent, MessagesTopBarComponent],
  imports: [CommonModule, MessagesRoutingModule, TranslateModule],
  bootstrap: [MessagesStartPageComponent],
})
export class MessagesModule {}
