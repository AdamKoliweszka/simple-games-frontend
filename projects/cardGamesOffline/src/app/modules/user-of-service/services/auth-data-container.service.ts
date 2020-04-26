import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthDataContainerService {
  constructor() {}

  setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  get accessToken(): string {
    return localStorage.getItem("accessToken");
  }

  get refreshToken(): string {
    return localStorage.getItem("refreshToken");
  }
}
