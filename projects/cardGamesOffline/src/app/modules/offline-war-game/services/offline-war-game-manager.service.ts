import { Injectable } from "@angular/core";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { CardFactoryService } from "../../cards/services/card-factory/card-factory.service";
import { CardShufflingService } from "../../cards/services/card-shuffing/card-shuffling.service";
import { UsersDataContainerService } from "../../users-state/services/users-data-container.service";
import { RatingCardService } from "../../cards/services/rating-card/rating-card.service";
import { Card } from "../../cards/models/card";
import { ResultOfRatingCard } from "../../cards/enums/result-of-rating-card.enum";
import { ResultOfComparission } from "../models/result-of-comparission";
import { withLatestFrom, filter, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OfflineWarGameManagerService {
  constructor(
    private cardsDataContainerService: OfflineWarGameDataContainerService,
    private usersDataContainerService: UsersDataContainerService,
    private cardFactoryService: CardFactoryService,
    private shufflingService: CardShufflingService,
    private ratingService: RatingCardService
  ) {}

  initGame() {
    let cards = this.cardFactoryService.generateDeck();
    this.shufflingService.shufflingCards(cards);
    let firstPlayerCards = cards.slice(0, cards.length / 2);
    let secondPlayerCards = cards.slice(cards.length / 2);
    this.cardsDataContainerService.setCardsOfFirstPlayer(firstPlayerCards);
    this.cardsDataContainerService.setCardsOfSecondPlayer(secondPlayerCards);
    this.usersDataContainerService.initPoints(0);
    this.cardsDataContainerService.readyToCompareFlag
      .pipe(
        filter((value) => value),
        withLatestFrom(
          this.cardsDataContainerService.actualFirstPlayerCard,
          this.cardsDataContainerService.actualSecondPlayerCards
        )
      )
      .subscribe((values) => {
        setTimeout(() => {
          let result = this.compareCards(values[1], values[2]);
          this.cardsDataContainerService.addResultOfRound(result);
        }, 5000);
      });
  }

  makeMove() {
    this.cardsDataContainerService.makeMove();
  }

  compareCards(
    cardOfFirstPlayer: Card,
    cardOfSecondPlayer: Card
  ): ResultOfComparission {
    let finalResult = {
      cardsOfFirstPlayer: [],
      cardsOfSecondPlayer: [],
    } as ResultOfComparission;
    let result = this.ratingService.compareCard(
      cardOfFirstPlayer,
      cardOfSecondPlayer
    );
    switch (result) {
      case ResultOfRatingCard.CARD_1_WIN:
        finalResult.cardsOfFirstPlayer.push(cardOfFirstPlayer);
        finalResult.cardsOfFirstPlayer.push(cardOfSecondPlayer);
        this.shufflingService.shufflingCards(finalResult.cardsOfFirstPlayer);
        break;
      case ResultOfRatingCard.CARD_2_WIN:
        finalResult.cardsOfSecondPlayer.push(cardOfFirstPlayer);
        finalResult.cardsOfSecondPlayer.push(cardOfSecondPlayer);
        this.shufflingService.shufflingCards(finalResult.cardsOfSecondPlayer);
        break;
      case ResultOfRatingCard.DRAW:
        finalResult.cardsOfFirstPlayer.push(cardOfFirstPlayer);
        finalResult.cardsOfSecondPlayer.push(cardOfSecondPlayer);
        break;
    }
    return finalResult;
  }
}
