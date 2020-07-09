import { Component, OnInit } from "@angular/core";
import { FriendsDataContainerService } from "../services/friends-data-container.service";
import { Observable } from "rxjs";
import { User } from "../../user-of-service/models/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  allUsers$: Observable<User[]>;
  constructor(
    private friendsDataContainerService: FriendsDataContainerService
  ) {
    this.allUsers$ = this.friendsDataContainerService.listOfUsers;
  }

  ngOnInit() {}

  // get allUsers$() {
  //   return this.friendsDataContainerService.listOfUsers;
  // }

  onSearchSubmit(text: string) {
    if (text.length === 0)
      this.allUsers$ = this.friendsDataContainerService.listOfUsers;
    else
      this.allUsers$ = this.friendsDataContainerService.listOfUsersByUsername(
        text
      );
  }

  onRemove() {
    this.allUsers$ = this.friendsDataContainerService.listOfUsers;
  }
}
