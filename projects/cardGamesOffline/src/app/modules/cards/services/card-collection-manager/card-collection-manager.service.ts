import { Injectable } from "@angular/core";
import { CardCollection } from "../../models/card-collection";
import { Card } from "../../models/card";

@Injectable({
  providedIn: "root"
})
export class CardCollectionManagerService {
  constructor() {}

  getLastCard(collection: CardCollection): Card {
    if (collection.cards.length == 0) return null;
    else return collection.cards[collection.cards.length - 1];
  }

  getFirstCard(collection: CardCollection): Card {
    if (collection.cards.length == 0) return null;
    else return collection.cards[0];
  }

  getLastNCards(collection: CardCollection, numberOfCards: number): Card[] {
    if (collection.cards.length < numberOfCards) return null;
    else return collection.cards.splice(-numberOfCards);
  }
}
