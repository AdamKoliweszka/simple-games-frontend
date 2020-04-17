import { Component, OnInit } from "@angular/core";
import { OfflinePlayersDataContainerService } from "../../modules/offline-players-state/services/offline-players-data-container.service";
import { Router } from "@angular/router";
import { OfflinePlayer } from "../../modules/offline-players-state/models/offline-player";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private playersDataContainerService: OfflinePlayersDataContainerService,
    private router: Router
  ) {}

  onPlayersSubmit(playersNames: string[]) {
    let firstUser = { name: playersNames[0], points: 0 } as OfflinePlayer;
    let secondUser = { name: playersNames[1], points: 0 } as OfflinePlayer;
    this.playersDataContainerService.initPlayer(firstUser);
    this.playersDataContainerService.initPlayer(secondUser);
    this.playersDataContainerService.setActivePlayer(firstUser);
    this.router.navigate(["games"]);
  }

  ngOnInit() {}
}
