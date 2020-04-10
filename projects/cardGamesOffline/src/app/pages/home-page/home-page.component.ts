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

  onUsersSubmit(usersNames: string[]) {
    let firstUser = { name: usersNames[0] } as User;
    let secondUser = { name: usersNames[1] } as User;
    console.log(firstUser);
    this.usersDataContainerService.initFirstUser(firstUser);
    this.usersDataContainerService.initSecondUser(secondUser);
    this.usersDataContainerService.setActiveUser(firstUser);
    this.router.navigate(["games"]);
  }

  ngOnInit() {}
}
