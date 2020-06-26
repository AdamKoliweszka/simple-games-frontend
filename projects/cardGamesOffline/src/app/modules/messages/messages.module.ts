import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesStartPageComponent } from "./messages-start-page/messages-start-page.component";

import { TranslateModule } from "@ngx-translate/core";
import { UnderlineTopBarModule } from "../design-components/underline-top-bar/underline-top-bar.module";

@NgModule({
  declarations: [MessagesStartPageComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    TranslateModule,
    UnderlineTopBarModule,
  ],
  bootstrap: [MessagesStartPageComponent],
})
export class MessagesModule {}
