import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../../user-of-service/models/user";
import { FriendsDataContainerService } from "../services/friends-data-container.service";

@Component({
  selector: "app-user-friends",
  templateUrl: "./user-friends.component.html",
  styleUrls: ["./user-friends.component.scss"],
})
export class UserFriendsComponent implements OnInit {
  allFriends$: Observable<User[]>;
  constructor(
    private friendsDataContainerService: FriendsDataContainerService
  ) {
    this.allFriends$ = this.friendsDataContainerService.listOfFriends;
  }

  ngOnInit() {}

  onSearchSubmit(text: string) {
    if (text.length === 0)
      this.allFriends$ = this.friendsDataContainerService.listOfUsers;
    else
      this.allFriends$ = this.friendsDataContainerService.listOfUsersByUsername(
        text
      );
  }

  onReset() {
    this.allFriends$ = this.friendsDataContainerService.listOfFriends;
  }

  onLeftClick(user: User) {
    // this.friendsDataContainerService.inviteFriend(user.username);
  }
}
