import { Injectable } from "@angular/core";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { CardFactoryService } from "../../cards/services/card-factory/card-factory.service";
import { CardShufflingService } from "../../cards/services/card-shuffing/card-shuffling.service";
import { UsersDataContainerService } from "../../users-state/services/users-data-container.service";

@Injectable({
  providedIn: "root",
})
export class OfflineWarGameManagerService {
  constructor(
    private cardsDataContainerService: OfflineWarGameDataContainerService,
    private usersDataContainerService: UsersDataContainerService,
    private cardFactoryService: CardFactoryService,
    private shufflingService: CardShufflingService
  ) {}

  initGame() {
    let cards = this.cardFactoryService.generateDeck();
    this.shufflingService.shufflingCards(cards);
    let firstPlayerCards = cards.slice(0, cards.length / 2);
    let secondPlayerCards = cards.slice(cards.length / 2);
    this.cardsDataContainerService.setCardsOfFirstPlayer(firstPlayerCards);
    this.cardsDataContainerService.setCardsOfSecondPlayer(secondPlayerCards);
    this.usersDataContainerService.initPoints(26);
  }

  makeMove() {
    this.cardsDataContainerService.makeMove();
  }
}
