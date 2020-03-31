import { Component, OnInit } from "@angular/core";
import { OfflineWarGameManagerService } from "../services/offline-war-game-manager.service";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"]
})
export class GamePageComponent implements OnInit {
  constructor(private gameService: OfflineWarGameManagerService) {
    this.gameService.initGame();
  }

  ngOnInit() {}
}
