import { Injectable } from "@angular/core";
import { ChatWsService } from "./chat-ws.service";
import { ChatApiService } from "./chat-api.service";
import { ChatDataContainerService } from "../chat-state/services/chat-data-container.service";

@Injectable({
  providedIn: "root",
})
export class ChatMessagesManagerService {
  constructor(
    private chatWsService: ChatWsService,
    private chatApiService: ChatApiService,
    private chatDataContainerService: ChatDataContainerService
  ) {
    this.chatWsService.chatMessages.subscribe((message) => {
      this.chatDataContainerService.addChatMessage(message);
    });
  }
}
