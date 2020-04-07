import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/card";

@Component({
  selector: "app-cards-bar",
  templateUrl: "./cards-bar.component.html",
  styleUrls: ["./cards-bar.component.scss"]
})
export class CardsBarComponent implements OnInit {
  @Input() cards: Card[];
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

  get clickability() {
    let clickability = [];
    for (
      let i = this.firstIndex;
      i < this.lastIndex && i < this.cards.length;
      i++
    ) {
      clickability.push(i === 0);
    }
    return clickability;
  }

  ngOnInit() {}
}
