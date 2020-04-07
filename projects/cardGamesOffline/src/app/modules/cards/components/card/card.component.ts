import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/card";
import { CardColor } from "../../enums/card-color.enum";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() clickable: boolean;
  CardColor = CardColor;
  constructor() {}
  ngOnInit() {}
}
