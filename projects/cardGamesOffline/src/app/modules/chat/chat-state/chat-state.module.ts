import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { chatStateKey } from "./chat-state.key";
import { ChatEffect } from "./chat-state.effects";
import * as fromChat from "./chat-state.reducers";
import { ChatMessagesManagerService } from "../services/chat-messages-manager.service";
import { ChatDataContainerService } from "./services/chat-data-container.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(chatStateKey, fromChat.reducer),
    EffectsModule.forFeature([ChatEffect]),
  ],
  providers: [ChatMessagesManagerService],
})
export class ChatStateModule {
  constructor(
    private chatMangerService: ChatMessagesManagerService,
    private chatDataContainer: ChatDataContainerService
  ) {
    this.chatDataContainer.initMessages();
  }
}
