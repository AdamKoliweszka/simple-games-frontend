import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../../models/card";

@Component({
  selector: "app-cards-collection",
  templateUrl: "./cards-collection.component.html",
  styleUrls: ["./cards-collection.component.scss"],
})
export class CardsCollectionComponent implements OnInit {
  @Input() cards: Card[];
  @Output() clickCard: EventEmitter<Card> = new EventEmitter<Card>();
  constructor() {}

  ngOnInit() {}

  onClickCard(card: Card) {
    this.clickCard.emit(card);
  }
}
