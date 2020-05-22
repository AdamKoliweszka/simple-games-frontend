import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Game } from "../models/game";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GamesListApiService {
  constructor(private http: HttpClient) {}

  getGamesList(): Observable<Game[]> {
    return this.http.get<Game[]>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/games"
    );
  }
}
