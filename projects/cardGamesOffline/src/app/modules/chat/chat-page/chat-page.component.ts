import { Component, OnInit } from "@angular/core";
import { ChatApiService } from "../services/chat-api.service";
import { ChatWsService } from "../services/chat-ws.service";
import { ChatDataContainerService } from "../chat-state/services/chat-data-container.service";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.scss"],
})
export class ChatPageComponent implements OnInit {
  constructor(
    private chatApiService: ChatApiService,
    private chatWsService: ChatWsService,
    private chatDataContainerService: ChatDataContainerService
  ) {}

  ngOnInit() {}

  sendMessage(message: string) {
    this.chatApiService.sendMessage(message).subscribe();
  }

  get chatMessages$() {
    return this.chatDataContainerService.chatMessages;
  }
}
