import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";

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
}
