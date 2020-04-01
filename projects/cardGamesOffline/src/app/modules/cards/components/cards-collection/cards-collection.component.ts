import { Component, OnInit, Input } from "@angular/core";
import { Card } from "../../models/card";

@Component({
  selector: "app-cards-collection",
  templateUrl: "./cards-collection.component.html",
  styleUrls: ["./cards-collection.component.scss"]
})
export class CardsCollectionComponent implements OnInit {
  @Input() cards: Card[];
  constructor() {}

  ngOnInit() {}
}
