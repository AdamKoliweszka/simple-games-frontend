import { Injectable } from "@angular/core";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { CardFactoryService } from "../../cards/services/card-factory/card-factory.service";
import { CardShufflingService } from "../../cards/services/card-shuffing/card-shuffling.service";

@Injectable({
  providedIn: "root"
})
export class OfflineWarGameManagerService {
  constructor(
    private dataContainerService: OfflineWarGameDataContainerService,
    private cardFactoryService: CardFactoryService,
    private shufflingService: CardShufflingService
  ) {}

  initGame() {
    let cards = this.cardFactoryService.generateDeck();
    this.shufflingService.shufflingCards(cards);
    let firstPlayerCards = cards.slice(0, cards.length / 2);
    let secondPlayerCards = cards.slice(cards.length / 2);
    this.dataContainerService.setCardsOfFirstPlayer(firstPlayerCards);
    this.dataContainerService.setCardsOfSecondPlayer(secondPlayerCards);
  }
}
