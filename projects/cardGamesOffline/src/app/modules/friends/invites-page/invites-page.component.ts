import { Component, OnInit } from "@angular/core";
import { FriendsDataContainerService } from "../services/friends-data-container.service";
import { Observable } from "rxjs";
import { Friendship } from "../interface/friendship.interface";

@Component({
  selector: "app-invites-page",
  templateUrl: "./invites-page.component.html",
  styleUrls: ["./invites-page.component.scss"],
})
export class InvitesPageComponent implements OnInit {
  listInvitesToAccept$: Observable<Friendship[]>;
  listSentInvites$: Observable<Friendship[]>;
  constructor(
    private friendsDataContainerService: FriendsDataContainerService
  ) {
    this.listInvitesToAccept$ = this.friendsDataContainerService.listOfInivitesToAccept;
    this.listSentInvites$ = this.friendsDataContainerService.listOfSentInivites;
  }

  ngOnInit() {}
}
