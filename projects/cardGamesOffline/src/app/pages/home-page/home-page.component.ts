import { Component, OnInit } from "@angular/core";
import { UsersDataContainerService } from "../../modules/users-state/services/users-data-container.service";
import { Router } from "@angular/router";
import { User } from "../../modules/users-state/models/user";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private usersDataContainerService: UsersDataContainerService,
    private router: Router
  ) {}

  onPlayersSubmit(playersNames: string[]) {
    let firstUser = { name: playersNames[0] } as User;
    let secondUser = { name: playersNames[1] } as User;
    this.usersDataContainerService.initFirstUser(firstUser);
    this.usersDataContainerService.initSecondUser(secondUser);
    this.usersDataContainerService.setActiveUser(firstUser);
    this.router.navigate(["games"]);
  }

  ngOnInit() {}
}
