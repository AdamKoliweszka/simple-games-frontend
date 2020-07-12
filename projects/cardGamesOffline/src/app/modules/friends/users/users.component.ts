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
  listOfIsNotInRelationWithUser$: Observable<boolean[]>;
  constructor(
    private friendsDataContainerService: FriendsDataContainerService
  ) {
    this.allUsers$ = this.friendsDataContainerService.listOfUsers;
    this.listOfIsNotInRelationWithUser$ = this.friendsDataContainerService.listOfIsNotInRelationWithUser;
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

  onReset() {
    this.allUsers$ = this.friendsDataContainerService.listOfUsers;
  }

  onLeftClick(user: User) {
    this.friendsDataContainerService.inviteFriend(user.username);
  }
}
