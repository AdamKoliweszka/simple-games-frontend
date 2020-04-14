import { Injectable } from "@angular/core";
import { OfflineWarGameState } from "../offline-war-game-state.reducers";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Card } from "../../../cards/models/card";
import * as GamesSelectors from "../offline-war-game-state.selectors";
import * as GamesActions from "../offline-war-game-state.actions";
import { ResultOfComparission } from "../../models/result-of-comparission";

@Injectable({
  providedIn: "root",
})
export class OfflineWarGameDataContainerService {
  constructor(private store: Store<OfflineWarGameState>) {}

  makeMove() {
    this.store.dispatch(GamesActions.makeMove());
  }

  setCardsOfFirstPlayer(cards: Card[]) {
    this.store.dispatch(GamesActions.initFirstPlayerCards({ cards }));
  }

  setCardsOfSecondPlayer(cards: Card[]) {
    this.store.dispatch(GamesActions.initSecondPlayerCards({ cards }));
  }

  addResultOfRound(result: ResultOfComparission) {
    this.store.dispatch(GamesActions.addResultOfRound({ result }));
  }

  get readyToCompareFlag(): Observable<boolean> {
    return this.store.select(GamesSelectors.selectReadyToCompareFlag);
  }

  get firstPlayerCards(): Observable<Card[]> {
    return this.store.select(GamesSelectors.selectFirstPlayerCards);
  }

  get secondPlayerCards(): Observable<Card[]> {
    return this.store.select(GamesSelectors.selectSecondPlayerCards);
  }

  get actualFirstPlayerCard(): Observable<Card> {
    return this.store.select(GamesSelectors.selectActualCardOfFirstPlayer);
  }

  get actualSecondPlayerCards(): Observable<Card> {
    return this.store.select(GamesSelectors.selectActualCardOfSecondPlayer);
  }

  get firstCardOfFirstPlayer(): Observable<Card> {
    return this.store.select(GamesSelectors.selectFirstCardOfFirstPlayer);
  }

  get firstCardOfSecondPlayer(): Observable<Card> {
    return this.store.select(GamesSelectors.selectFirstCardOfSecondPlayer);
  }

  get numberOfCardsOfFirstPlayer(): Observable<number> {
    return this.store.select(GamesSelectors.selectNumberOfCardsOfFirstPlayer);
  }

  get numberOfCardsOfSecondPlayer(): Observable<number> {
    return this.store.select(GamesSelectors.selectNumberOfCardsOfSecondPlayer);
  }
}
