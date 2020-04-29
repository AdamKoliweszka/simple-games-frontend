import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthApiService } from "../services/auth-api.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-user-of-service-page",
  templateUrl: "./user-of-service-page.component.html",
  styleUrls: ["./user-of-service-page.component.scss"],
})
export class UserOfServicePageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authService.loginUser(user);
  }
}
