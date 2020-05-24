import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { ChatMessage } from "../models/chat-message";

@Injectable({
  providedIn: "root",
})
export class ChatWsService {
  constructor(private socket: Socket) {}

  get chatMessages(): Observable<ChatMessage> {
    return this.socket.fromEvent("chat/message");
  }
}
