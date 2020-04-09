import { Component, OnInit } from "@angular/core";
import { OfflineWarGameManagerService } from "../services/offline-war-game-manager.service";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { Observable } from "rxjs";
import { Card } from "../../cards/models/card";
import { User } from "../../users-state/models/user";
import { UsersDataContainerService } from "../../users-state/services/users-data-container.service";

@Component({
  selector: "app-game-page",
  templateUrl: "./game-page.component.html",
  styleUrls: ["./game-page.component.scss"],
})
export class GamePageComponent implements OnInit {
  cards$: Observable<Card[]>;
  actualPlayer$: Observable<User>;
  constructor(
    private gameService: OfflineWarGameManagerService,
    private dataContainerService: OfflineWarGameDataContainerService,
    private usersService: UsersDataContainerService
  ) {
    this.gameService.initGame();
    this.cards$ = this.dataContainerService.firstPlayerCards;
    this.actualPlayer$ = this.usersService.activeUser;
  }

  onCardClick(card: Card) {
    console.log(card);
  }

  ngOnInit() {}
}
