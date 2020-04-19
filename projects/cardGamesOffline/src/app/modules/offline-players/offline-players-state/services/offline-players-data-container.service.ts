import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { OfflinePlayer } from "../models/offline-player";
import * as UsersActions from "../offline-players-state.actions";
import * as UsersSelectors from "../users-state.selectors";
import { Observable } from "rxjs";
import { OfflinePlayersState } from "../offline-players-state.reducers";

@Injectable({
  providedIn: "root",
})
export class OfflinePlayersDataContainerService {
  constructor(private store: Store<OfflinePlayersState>) {}

  initPlayer(player: OfflinePlayer) {
    this.store.dispatch(UsersActions.addPlayer({ player }));
  }

  initPoints(points: number) {
    this.store.dispatch(UsersActions.initPoints({ points }));
  }

  setActivePlayer(activePlayer: OfflinePlayer) {
    this.store.dispatch(
      UsersActions.initActivePlayer({ player: activePlayer })
    );
  }

  changeActivePlayer() {
    this.store.dispatch(UsersActions.changeActivePlayer());
  }

  getPlayer(index: number): Observable<OfflinePlayer> {
    return this.store.select(UsersSelectors.selectPlayer, { index });
  }

  getPointsOfPlayer(index: number): Observable<number> {
    return this.store.select(UsersSelectors.selectPointsOfPlayer, { index });
  }

  get activePlayer(): Observable<OfflinePlayer> {
    return this.store.select(UsersSelectors.selectActivePlayer);
  }

  isNumberOfPlayersEqualTo(number: number): Observable<boolean> {
    return this.store.select(UsersSelectors.selectIsNumberOfPlayersEqualTo, {
      number,
    });
  }
}
