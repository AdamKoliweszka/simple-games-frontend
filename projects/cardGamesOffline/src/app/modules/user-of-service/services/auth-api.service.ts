import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { environment } from "projects/cardGamesOffline/src/environments/environment";
import { LoginResponse } from "../models/loginResponse";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/login",
      user
    );
  }

  registerUser(user: User) {
    return this.http.post(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/users",
      user
    );
  }

  logoutUser(refreshToken: string) {
    return this.http.post(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/logout",
      refreshToken
    );
  }

  refreshAccessToken(refreshToken: string) {
    return this.http.post(
      "http://" + environment.apiIp + ":" + environment.apiPort + "/tokens",
      refreshToken
    );
  }
}
