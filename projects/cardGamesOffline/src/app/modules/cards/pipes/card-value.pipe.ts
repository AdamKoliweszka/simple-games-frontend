import { Pipe, PipeTransform } from "@angular/core";
import { CardValue } from "../enums/card-value.enum";

@Pipe({
  name: "cardValue",
})
export class CardValuePipe implements PipeTransform {
  transform(value: CardValue): string {
    switch (value) {
      case CardValue.ACE:
        return "ACE";
      case CardValue.KING:
        return "KING";
      case CardValue.QUEEN:
        return "QUEEN";
      case CardValue.JACK:
        return "JACK";
      case CardValue.VALUE_10:
        return "TEN";
      case CardValue.VALUE_9:
        return "NINE";
      case CardValue.VALUE_8:
        return "EIGHT";
      case CardValue.VALUE_7:
        return "SEVEN";
      case CardValue.VALUE_6:
        return "SIX";
      case CardValue.VALUE_5:
        return "FIVE";
      case CardValue.VALUE_4:
        return "FOUR";
      case CardValue.VALUE_3:
        return "THREE";
      case CardValue.VALUE_2:
        return "TWO";
      default:
        return "NIC";
    }
  }
}
