import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../user-of-service/services/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { takeUntil, takeWhile } from "rxjs/operators";

@Component({
  selector: "app-logout-page",
  templateUrl: "./logout-page.component.html",
  styleUrls: ["./logout-page.component.scss"],
})
export class LogoutPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.isLoged
      .pipe(takeWhile((value) => value, true))
      .subscribe((value) => {
        if (!value) {
          this.router.navigate(["users/login"]);
        }
      });
  }

  ngOnInit() {
    setTimeout(() => {
      this.authService.logoutUser();
    }, 500);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
