import { Component, OnInit } from "@angular/core";
import { OfflineWarGameManagerService } from "../services/offline-war-game-manager.service";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { Observable } from "rxjs";
import { Card } from "../../cards/models/card";
import { OfflinePlayer } from "../../offline-players-state/models/offline-player";
import { OfflinePlayersDataContainerService } from "../../offline-players-state/services/offline-players-data-container.service";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
  firstPlayerCards$: Observable<Card[]>;
  secondPlayerCards$: Observable<Card[]>;
  actualPlayer$: Observable<OfflinePlayer>;
  firstPlayer$: Observable<OfflinePlayer>;
  constructor(
    private gameService: OfflineWarGameManagerService,
    private dataContainerService: OfflineWarGameDataContainerService,
    private playersService: OfflinePlayersDataContainerService
  ) {
    this.gameService.initGame();
    this.firstPlayerCards$ = this.dataContainerService.firstPlayerCards;
    this.secondPlayerCards$ = this.dataContainerService.secondPlayerCards;
    this.actualPlayer$ = this.playersService.activePlayer;
    this.firstPlayer$ = this.playersService.getPlayer(0);
  }

  onCardClick(card: Card) {
    this.gameService.makeMove();
  }

  ngOnInit() {}
}
