import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../models/user";
import { AuthService } from "../services/auth.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-login-page",
  templateUrl: "./user-login-page.component.html",
  styleUrls: ["./user-login-page.component.scss"],
})
export class UserLoginPageComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authService.loginUser(user);
  }

  get isLoginProcessStart(): Observable<boolean> {
    return this.authService.isInLoginProcess;
  }
}
