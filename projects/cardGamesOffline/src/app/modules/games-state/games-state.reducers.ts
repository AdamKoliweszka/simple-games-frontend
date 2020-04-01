import * as GamesActions from "./games-state.actions";
import { createReducer, on, Action } from "@ngrx/store";
import { Game } from "./models/game";

export interface GamesState {
  games: Game[];
}

const initialState: GamesState = {
  games: [{ name: "War card game", url: "war-game" } as Game]
};

const gamesReducer = createReducer(
  initialState,
  on(GamesActions.initGamesList, (state, { games }) => ({
    ...state,
    games: games
  }))
);

export function reducer(state: GamesState | undefined, action: Action) {
  return gamesReducer(state, action);
}
