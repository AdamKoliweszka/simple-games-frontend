import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Card } from "../../models/card";
import { CardColor } from "../../enums/card-color.enum";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() clickCard: EventEmitter<Card> = new EventEmitter<Card>();
  CardColor = CardColor;
  constructor() {}

  onClickCard() {
    if (this.card.isClickable) {
      this.clickCard.emit(this.card);
    }
  }
  ngOnInit() {}
}
