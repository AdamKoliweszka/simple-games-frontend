import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.scss"],
})
export class UserPageComponent implements OnInit, OnDestroy {
  isLogedSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.isLogedSubscription = this.authService.isLoged.subscribe((value) => {
      if (value) location.reload();
    });
  }

  ngOnInit() {}

  get isOnLoginPage(): boolean {
    return this.router.url === "/users/login";
  }
  get isOnRegisterPage(): boolean {
    return this.router.url === "/users/register";
  }

  get isLoged$() {
    return this.authService.isLoged;
  }

  ngOnDestroy() {
    this.isLogedSubscription.unsubscribe();
  }
}
