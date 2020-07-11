import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FriendsDataContainerService } from "../services/friends-data-container.service";

@Component({
  selector: "app-friends-page",
  templateUrl: "./friends-page.component.html",
  styleUrls: ["./friends-page.component.scss"],
})
export class FriendsPageComponent implements OnInit {
  items = ["FRIENDS_PAGE.USERS", "FRIENDS_PAGE.FRIENDS"];

  constructor(
    private router: Router,
    private friendsDataContainerService: FriendsDataContainerService
  ) {
    this.friendsDataContainerService.loadUsersList();
    this.friendsDataContainerService.loadFriendshipsList();
  }

  get activeIndex() {
    let url = this.router.url;
    if (url.indexOf("friends/user-friends") >= 0) return 1;
    if (url.indexOf("friends/users") >= 0) return 0;
  }

  onClickItem(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(["friends/users"]);
        break;
      case 1:
        this.router.navigate(["friends/user-friends"]);
        break;
    }
  }

  ngOnInit() {}
}
