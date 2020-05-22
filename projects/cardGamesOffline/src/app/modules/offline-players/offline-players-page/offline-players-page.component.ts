import { Component, OnInit } from "@angular/core";
import { OfflinePlayer } from "../offline-players-state/models/offline-player";
import { OfflinePlayersDataContainerService } from "../offline-players-state/services/offline-players-data-container.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-offline-players-page",
  templateUrl: "./offline-players-page.component.html",
  styleUrls: ["./offline-players-page.component.scss"],
})
export class OfflinePlayersPageComponent implements OnInit {
  constructor(
    private playersDataContainerService: OfflinePlayersDataContainerService,
    private router: Router
  ) {}

  ngOnInit() {}

  onPlayersSubmit(playersNames) {
    let firstUser = { name: playersNames[0], points: 0 } as OfflinePlayer;
    let secondUser = { name: playersNames[1], points: 0 } as OfflinePlayer;
    this.playersDataContainerService.initPlayer(firstUser);
    this.playersDataContainerService.initPlayer(secondUser);
    this.playersDataContainerService.setActivePlayer(firstUser);
    this.router.navigate([this.router.url + "/play"]);
  }
}
