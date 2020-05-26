import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-messages-top-bar",
  templateUrl: "./messages-top-bar.component.html",
  styleUrls: ["./messages-top-bar.component.scss"],
})
export class MessagesTopBarComponent implements OnInit {
  constructor(private router: Router) {}

  get isOnChat(): boolean {
    return this.router.url.indexOf("/chat") >= 0;
  }

  get isOnForum(): boolean {
    return this.router.url.indexOf("/forum") >= 0;
  }

  get isOnPW(): boolean {
    return this.router.url.indexOf("/pw") >= 0;
  }

  ngOnInit() {}
}
