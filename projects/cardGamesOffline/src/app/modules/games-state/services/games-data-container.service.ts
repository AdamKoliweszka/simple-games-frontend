import { Injectable } from "@angular/core";
import { GamesState } from "../games-state.reducers";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Game } from "../models/game";
import * as GamesSelectors from "../games-state.selectors";
import * as GamesActions from "../games-state.actions";

@Injectable({
  providedIn: "root"
})
export class GamesDataContainerService {
  constructor(private store: Store<GamesState>) {}

  initGamesList(games: Game[]) {
    this.store.dispatch(GamesActions.initGamesList({ games }));
  }

  get listOfGames(): Observable<Game[]> {
    return this.store.select(GamesSelectors.selectGamesList);
  }
}
