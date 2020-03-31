import { Injectable } from "@angular/core";
import { Card } from "../../models/card";

@Injectable({
  providedIn: "root"
})
export class CardShufflingService {
  constructor() {}

  shufflingCards(cards: Card[]) {
    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      this.swap(cards, i, j);
    }
  }

  swap(cards: Card[], i: number, j: number) {
    let bufor: Card = cards[i];
    cards[i] = cards[j];
    cards[j] = bufor;
  }
}
