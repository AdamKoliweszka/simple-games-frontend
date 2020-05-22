import { CardColor } from "../enums/card-color.enum";
import { CardValue } from "../enums/card-value.enum";

export interface Card {
  value: CardValue;
  color: CardColor;
  isClickable: boolean;
}
