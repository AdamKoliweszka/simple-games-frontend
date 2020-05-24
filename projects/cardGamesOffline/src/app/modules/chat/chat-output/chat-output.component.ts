import { Component, OnInit, Input } from "@angular/core";
import { ChatMessage } from "../models/chat-message";

@Component({
  selector: "app-chat-output",
  templateUrl: "./chat-output.component.html",
  styleUrls: ["./chat-output.component.scss"],
})
export class ChatOutputComponent implements OnInit {
  @Input() chatMessages: ChatMessage[];
  constructor() {}

  ngOnInit() {}
}
