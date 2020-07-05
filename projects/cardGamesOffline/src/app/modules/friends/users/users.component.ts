import { Component, OnInit } from "@angular/core";
import { FriendsDataContainerService } from "../services/friends-data-container.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  constructor(
    private friendsDataContainerService: FriendsDataContainerService
  ) {}

  ngOnInit() {}

  get allUsers$() {
    return this.friendsDataContainerService.listOfUsers;
  }
}
