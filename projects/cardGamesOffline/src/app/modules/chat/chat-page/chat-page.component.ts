import { Component, OnInit } from "@angular/core";
import { ChatApiService } from "../services/chat-api.service";
import { ChatWsService } from "../services/chat-ws.service";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.scss"],
})
export class ChatPageComponent implements OnInit {
  constructor(
    private chatApiService: ChatApiService,
    private chatWsService: ChatWsService
  ) {}

  ngOnInit() {}

  sendMessage(message: string) {
    this.chatApiService.sendMessage(message).subscribe();
  }
}
