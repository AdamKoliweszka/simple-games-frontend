import { Injectable } from "@angular/core";
import { Card } from "../../models/card";
import { CardCollection } from "../../models/card-collection";

@Injectable({
  providedIn: "root"
})
export class CardShufflingService {
  constructor() {}

  shufflingCards(collection: CardCollection) {
    for (let i = collection.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      this.swap(collection, i, j);
    }
  }

  swap(collection: CardCollection, i: number, j: number) {
    let bufor: Card = collection.cards[i];
    collection.cards[i] = collection.cards[j];
    collection.cards[j] = bufor;
  }
}
