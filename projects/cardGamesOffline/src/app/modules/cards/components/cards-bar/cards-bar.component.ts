import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../../models/card";
import { OfflinePlayer } from "../../../offline-players-state/models/offline-player";

@Component({
  selector: "app-cards-bar",
  templateUrl: "./cards-bar.component.html",
  styleUrls: ["./cards-bar.component.scss"],
})
export class CardsBarComponent implements OnInit {
  @Input() cards: Card[];
  @Input() clickability: boolean[];
  @Input() actualPlayer: OfflinePlayer;
  @Output() clickCard: EventEmitter<Card> = new EventEmitter<Card>();

  firstIndex: number = 0;
  lastIndex: number = 4;

  constructor() {}

  onLeftArrowClick() {
    this.firstIndex--;
    this.lastIndex--;
  }

  onRightArrowClick() {
    this.firstIndex++;
    this.lastIndex++;
  }

  get displayCards() {
    return this.cards.slice(
      this.firstIndex,
      this.cards.length > this.lastIndex
        ? this.lastIndex + 1
        : this.cards.length - 1
    );
  }

  onClickCard(card: Card) {
    this.clickCard.emit(card);
  }

  ngOnInit() {}
}
