import { Component, OnInit } from "@angular/core";
import { Game } from "../../modules/games-state/models/game";
import { GamesDataContainerService } from "../../modules/games-state/services/games-data-container.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"]
})
export class GamesListComponent implements OnInit {
  games$: Observable<Game[]>;
  constructor(private gamesDataService: GamesDataContainerService) {
    this.games$ = this.gamesDataService.listOfGames;
  }

  ngOnInit() {}
}
