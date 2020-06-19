import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../modules/user-of-service/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  private houverItem: string = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  get isGamesActive(): boolean {
    return (
      this.router.url.indexOf("/games") === 0 || this.houverItem === "games"
    );
  }

  get isHomeActive(): boolean {
    return this.router.url.indexOf("/home") === 0 || this.houverItem === "home";
  }

  get isChatActive(): boolean {
    return (
      this.router.url.indexOf("/messages") === 0 || this.houverItem === "chat"
    );
  }

  get isFriendsActive(): boolean {
    return (
      this.router.url.indexOf("/friends") === 0 || this.houverItem === "friends"
    );
  }

  get isAchievementsActive(): boolean {
    return (
      this.router.url.indexOf("/achievements") === 0 ||
      this.houverItem === "achievements"
    );
  }

  get isSettingsActive(): boolean {
    return (
      this.router.url.indexOf("/settings") === 0 ||
      this.houverItem === "settings"
    );
  }

  get isLogoutActive(): boolean {
    return (
      this.router.url.indexOf("/logout") === 0 || this.houverItem === "logout"
    );
  }

  mouseEnter(item: string) {
    this.houverItem = item;
  }

  mouseLeave() {
    this.houverItem = null;
  }
}
