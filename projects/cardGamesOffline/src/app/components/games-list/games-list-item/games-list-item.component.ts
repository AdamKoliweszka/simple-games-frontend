import { Component, OnInit, Input } from "@angular/core";
import { Game } from "../models/game";

@Component({
  selector: "app-games-list-item",
  templateUrl: "./games-list-item.component.html",
  styleUrls: ["./games-list-item.component.scss"]
})
export class GamesListItemComponent implements OnInit {
  @Input() game: Game;
  constructor() {}

  ngOnInit() {}
}
