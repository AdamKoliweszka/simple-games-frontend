import { Injectable } from "@angular/core";
import { Card } from "../../models/card";
import { CardColor } from "../../enums/card-color.enum";
import { CardValue } from "../../enums/card-value.enum";

@Injectable({
  providedIn: "root",
})
export class CardFactoryService {
  constructor() {}

  generateDeck(): Card[] {
    let cards: Card[] = [];

    for (let color in CardColor) {
      for (let value in CardValue) {
        let card = { color: color, value: value, isClickable: false } as Card;
        cards.push(card);
      }
    }
    return cards;
  }
}
