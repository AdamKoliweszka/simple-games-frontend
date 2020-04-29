import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../modules/user-of-service/services/auth.service";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onLogout() {
    this.authService.logoutUser();
  }
}
