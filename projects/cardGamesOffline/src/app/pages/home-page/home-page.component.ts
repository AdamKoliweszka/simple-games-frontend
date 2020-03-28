import { Component, OnInit } from "@angular/core";
import { UsersDataContainerService } from "../../modules/users-state/services/users-data-container.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  constructor(
    private usersDataContainerService: UsersDataContainerService,
    private router: Router
  ) {}

  onUsersSubmit(usersNames: string[]) {
    this.usersDataContainerService.initFirstUser(usersNames[0]);
    this.usersDataContainerService.initSecondUser(usersNames[1]);
    this.router.navigate(["game-select"]);
  }

  ngOnInit() {}
}
