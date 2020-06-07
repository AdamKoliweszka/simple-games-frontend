import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-login-page",
  templateUrl: "./user-login-page.component.html",
  styleUrls: ["./user-login-page.component.scss"],
})
export class UserLoginPageComponent implements OnInit, OnDestroy {
  isLogedSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.isLogedSubscription = this.authService.isLoged.subscribe((value) => {
      if (value) this.router.navigateByUrl("/games");
    });
  }

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.authService.loginUser(user);
  }

  get isLoginProcessStart(): Observable<boolean> {
    return this.authService.isInLoginProcess;
  }

  ngOnDestroy() {
    this.isLogedSubscription.unsubscribe();
  }
}
