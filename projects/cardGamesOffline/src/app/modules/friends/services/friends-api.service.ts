import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";
import { User } from "../../user-of-service/models/user";
import { Observable } from "rxjs";
import { Friendship } from "../interface/friendship.interface";
import { StatusOfFriendship } from "../enum/status-friendship.enum";

@Injectable({
  providedIn: "root",
})
export class FriendsApiService {
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/users"
    );
  }

  sendInviteToFriend(friendUsername: string) {
    return this.http.post<Friendship>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/friends",
      { friendUsername }
    );
  }

  changeStatusOfFriendship(friendUsername: string, status: StatusOfFriendship) {
    return this.http.put<Friendship>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/friends",
      { friendUsername, status }
    );
  }

  getFriendshipList(): Observable<Friendship[]> {
    return this.http.get<Friendship[]>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/friends"
    );
  }
}
