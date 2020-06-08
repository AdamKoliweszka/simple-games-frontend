import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/cardGamesOffline/src/environments/environment";
import { User } from "../models/user";

@Injectable({
  providedIn: "root",
})
export class UsersApiService {
  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    console.log(user);
    return this.http.post(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/users",
      user
    );
  }
}
