import { Injectable } from "@angular/core";
import { Card } from "../../models/card";
import { CardColor } from "../../enums/card-color.enum";
import { CardValue } from "../../enums/card-value.enum";
import { CardCollection } from "../../models/card-collection";

@Injectable({
  providedIn: "root"
})
export class CardFactoryService {
  constructor() {}

  generateDeck(): CardCollection {
    let cards: Card[] = [];

    for (let color in CardColor) {
      for (let value in CardValue) {
        let card = { color: color, value: value } as Card;
        cards.push(card);
      }
    }
    let collection: CardCollection = { cards: cards } as CardCollection;
    return collection;
  }
}
