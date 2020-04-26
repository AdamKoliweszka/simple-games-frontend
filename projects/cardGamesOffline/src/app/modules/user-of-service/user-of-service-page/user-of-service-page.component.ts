import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthApiServiceService } from "../services/auth-api-service.service";

@Component({
  selector: "app-user-of-service-page",
  templateUrl: "./user-of-service-page.component.html",
  styleUrls: ["./user-of-service-page.component.scss"],
})
export class UserOfServicePageComponent implements OnInit {
  constructor(
    private router: Router,
    private authApiServiceService: AuthApiServiceService
  ) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authApiServiceService
      .loginUser(user)
      .subscribe((value) => console.log(value));
    this.router.navigate(["games"]);
  }
}
