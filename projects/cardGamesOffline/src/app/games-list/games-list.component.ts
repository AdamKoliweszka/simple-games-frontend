import { Component, OnInit } from "@angular/core";
import { Game } from "./models/game";

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"]
})
export class GamesListComponent implements OnInit {
  games: Game[] = [{ name: "War card game", url: "/" } as Game];
  constructor() {}

  ngOnInit() {}
}
