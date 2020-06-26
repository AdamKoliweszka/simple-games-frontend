import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-friends-page",
  templateUrl: "./friends-page.component.html",
  styleUrls: ["./friends-page.component.scss"],
})
export class FriendsPageComponent implements OnInit {
  items = ["FRIENDS_TOP_BAR.USERS", "FRIENDS_TOP_BAR.FRIENDS"];

  constructor(private router: Router) {}

  get activeIndex() {
    let url = this.router.url;
    if (url.indexOf("friends") >= 0) return 1;
    if (url.indexOf("users") >= 0) return 0;
  }

  onClickItem(index: number) {
    switch (index) {
      case 0:
        this.router.navigate(["friends"]);
        break;
      case 1:
        this.router.navigate(["users"]);
        break;
    }
    console.log(index);
  }

  ngOnInit() {}
}
