import { createAction, props } from "@ngrx/store";
import { Game } from "./models/game";

export const initGamesList = createAction(
  "[GAMES] Add games list",
  props<{ games: Game[] }>()
);
