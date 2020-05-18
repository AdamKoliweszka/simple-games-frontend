import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatRoutingModule } from "./chat-routing.module";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { ChatOutputComponent } from "./chat-output/chat-output.component";
import { ChatInputComponent } from "./chat-input/chat-input.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ChatPageComponent, ChatOutputComponent, ChatInputComponent],
  imports: [CommonModule, ChatRoutingModule, TranslateModule],
})
export class ChatModule {}
