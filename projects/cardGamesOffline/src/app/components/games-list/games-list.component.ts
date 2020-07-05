import { Component, OnInit } from "@angular/core";
import { Game } from "../../modules/games-state/models/game";
import { GamesDataContainerService } from "../../modules/games-state/services/games-data-container.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-games-list",
  templateUrl: "./games-list.component.html",
  styleUrls: ["./games-list.component.scss"],
})
export class GamesListComponent implements OnInit {
  games$: Observable<Game[]>;
  constructor(
    private router: Router,
    private gamesDataService: GamesDataContainerService
  ) {
    this.gamesDataService.loadGamesList();
    this.games$ = this.gamesDataService.listOfGames;
  }

  // get names() {
  //   let names = [];
  //   return names;
  // }

  onCardClick(game: Game) {
    console.log(game);
    this.router.navigate(["games/" + game.url]);
  }

  ngOnInit() {}
}
