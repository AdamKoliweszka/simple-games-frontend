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
    return this.router.url === "/games" || this.houverItem === "games";
  }

  get isHomeActive(): boolean {
    return this.router.url === "/home" || this.houverItem === "home";
  }

  get isChatActive(): boolean {
    return this.router.url === "/chat" || this.houverItem === "chat";
  }

  get isFriendsActive(): boolean {
    return this.router.url === "/friends" || this.houverItem === "friends";
  }

  get isAchievementsActive(): boolean {
    return (
      this.router.url === "/achievements" || this.houverItem === "achievements"
    );
  }

  get isSettingsActive(): boolean {
    return this.router.url === "/settings" || this.houverItem === "settings";
  }

  get isLogoutActive(): boolean {
    return this.router.url === "/logout" || this.houverItem === "logout";
  }

  onLogout() {
    this.authService.logoutUser();
  }

  mouseEnter(item: string) {
    this.houverItem = item;
  }

  mouseLeave() {
    this.houverItem = null;
  }
}
