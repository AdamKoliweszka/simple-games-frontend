import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { Observable } from "rxjs";
import { ChatMessage } from "../models/chat-message";
import { AuthService } from "../../user-of-service/services/auth.service";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ChatWsService {
  constructor(private socket: Socket, private authService: AuthService) {
    this.authService.accessToken.pipe(take(1)).subscribe((value) => {
      this.socket.emit("authentication", { accessToken: value });
    });
  }

  get chatMessages(): Observable<ChatMessage> {
    return this.socket.fromEvent("chat/message");
  }
}
