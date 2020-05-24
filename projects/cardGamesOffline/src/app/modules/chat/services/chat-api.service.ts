import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";
import { Observable } from "rxjs";
import { ChatMessage } from "../models/chat-message";

@Injectable({
  providedIn: "root",
})
export class ChatApiService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/chat",
      { message }
    );
  }

  getOldMessages(numberOfMessages: number): Observable<ChatMessage[]> {
    return this.http.post<ChatMessage[]>(
      "http://" +
        environment.apiIp +
        ":" +
        environment.apiPort +
        "/chat/old-messages",
      { numberOfMessages }
    );
  }
}
