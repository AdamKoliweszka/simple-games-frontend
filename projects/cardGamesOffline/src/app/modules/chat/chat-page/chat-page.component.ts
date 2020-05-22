import { Component, OnInit } from "@angular/core";
import { ChatApiService } from "../services/chat-api.service";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.scss"],
})
export class ChatPageComponent implements OnInit {
  constructor(private chatApiService: ChatApiService) {}

  ngOnInit() {}

  sendMessage(message: string) {
    console.log(message);
    this.chatApiService.sendMessage(message).subscribe();
  }
}
