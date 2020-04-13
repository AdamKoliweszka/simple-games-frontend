import { Injectable } from "@angular/core";
import { ResultOfRatingCard } from "../../enums/result-of-rating-card.enum";
import { Card } from "../../models/card";
import { CardValue } from "../../enums/card-value.enum";

@Injectable({
  providedIn: "root",
})
export class RatingCardService {
  constructor() {}

  compareCard(card1: Card, card2: Card): ResultOfRatingCard {
    let value1 = parseInt(CardValue[card1.value]);
    let value2 = parseInt(CardValue[card2.value]);
    if (value1 == value2) return ResultOfRatingCard.DRAW;
    else if (value1 > value2) return ResultOfRatingCard.CARD_1_WIN;
    else return ResultOfRatingCard.CARD_2_WIN;
  }
}
