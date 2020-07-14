import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthStorageContainerService {
  constructor() {}

  setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  setUsername(username: string) {
    localStorage.setItem("username", username);
  }

  removeAccessToken() {
    localStorage.removeItem("accessToken");
  }

  removeRefreshToken() {
    localStorage.removeItem("refreshToken");
  }

  removeUsername() {
    localStorage.removeItem("username");
  }

  get accessToken(): string {
    return localStorage.getItem("accessToken");
  }

  get refreshToken(): string {
    return localStorage.getItem("refreshToken");
  }

  get username(): string {
    return localStorage.getItem("username");
  }
}
