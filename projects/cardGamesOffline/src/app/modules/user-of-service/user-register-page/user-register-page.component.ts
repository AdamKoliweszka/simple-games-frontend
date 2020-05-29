import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthApiService } from "../services/auth-api.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-register-page",
  templateUrl: "./user-register-page.component.html",
  styleUrls: ["./user-register-page.component.scss"],
})
export class UserRegisterPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authService.loginUser(user);
  }
}
