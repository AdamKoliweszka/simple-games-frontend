import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-of-service-page",
  templateUrl: "./user-of-service-page.component.html",
  styleUrls: ["./user-of-service-page.component.scss"],
})
export class UserOfServicePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.router.navigate(["games"]);
  }
}
