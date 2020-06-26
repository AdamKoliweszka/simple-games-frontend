import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-messages-start-page",
  templateUrl: "./messages-start-page.component.html",
  styleUrls: ["./messages-start-page.component.scss"],
})
export class MessagesStartPageComponent implements OnInit {
  items = [
    "MESSAGES_TOP_BAR.CHAT",
    "MESSAGES_TOP_BAR.FORUM",
    "MESSAGES_TOP_BAR.PW",
  ];

  get activeIndex() {
    let url = this.router.url;
    if (url.indexOf("messages/chat") >= 0) return 0;
    if (url.indexOf("messages/forum") >= 0) return 1;
    if (url.indexOf("messages/pw") >= 0) return 2;
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
