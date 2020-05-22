import { Component, OnInit } from "@angular/core";
import { OfflinePlayersDataContainerService } from "../../modules/offline-players/offline-players-state/services/offline-players-data-container.service";
import { Router } from "@angular/router";
import { OfflinePlayer } from "../../modules/offline-players/offline-players-state/models/offline-player";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
