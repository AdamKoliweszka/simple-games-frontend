import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthApiService } from "../services/auth-api.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./user-login-page.component.html",
  styleUrls: ["./user-login-page.component.scss"],
})
export class UserLoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authService.loginUser(user);
  }
}
