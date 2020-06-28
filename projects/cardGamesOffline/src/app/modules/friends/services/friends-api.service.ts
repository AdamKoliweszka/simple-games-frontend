import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";
import { User } from "../../user-of-service/models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FriendsApiService {
  constructor(private http: HttpClient) {}

  getGamesList(): Observable<User[]> {
    return this.http.get<User[]>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/users"
    );
  }
}
