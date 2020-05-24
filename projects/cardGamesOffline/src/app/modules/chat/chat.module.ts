import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { ChatOutputComponent } from "./chat-output/chat-output.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";
import { TranslateModule } from "@ngx-translate/core";
import { AutosizeModule } from "ngx-autosize";
import { ReactiveFormsModule } from "@angular/forms";
import { ChatMessagesManagerService } from "./services/chat-messages-manager.service";
import { ChatStateModule } from "./chat-state/chat-state.module";

@NgModule({
  declarations: [ChatPageComponent, ChatOutputComponent, ChatInputComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TranslateModule,
    AutosizeModule,
    ReactiveFormsModule,
    ChatStateModule,
  ],
})
export class ChatModule {}
