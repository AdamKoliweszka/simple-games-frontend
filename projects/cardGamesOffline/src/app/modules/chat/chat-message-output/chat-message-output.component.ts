import { Component, OnInit, Input } from "@angular/core";
import { ChatMessage } from "../models/chat-message";

@Component({
  selector: "app-chat-message-output",
  templateUrl: "./chat-message-output.component.html",
  styleUrls: ["./chat-message-output.component.scss"],
})
export class ChatMessageOutputComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  constructor() {}

  ngOnInit() {}
}
