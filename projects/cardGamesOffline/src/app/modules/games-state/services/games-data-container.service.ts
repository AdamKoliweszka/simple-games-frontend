import { Injectable } from "@angular/core";
import { GamesState } from "../games-state.reducers";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Game } from "../models/game";
import * as GamesSelectors from "../games-state.selectors";
import * as GamesActions from "../games-state.actions";

@Injectable({
  providedIn: "root",
})
export class GamesDataContainerService {
  constructor(private store: Store<GamesState>) {}

  loadGamesList() {
    this.store.dispatch(GamesActions.loadGamesList());
  }

  get listOfGames(): Observable<Game[]> {
    return this.store.select(GamesSelectors.selectGamesList);
  }
}
