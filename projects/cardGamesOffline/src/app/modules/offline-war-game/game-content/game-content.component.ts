import { Component, OnInit } from "@angular/core";
import { OfflineWarGameDataContainerService } from "../offline-war-game-state/services/offline-war-game-data-container.service";
import { Observable } from "rxjs";
import { Card } from "../../cards/models/card";

@Component({
  selector: "app-game-content",
  templateUrl: "./game-content.component.html",
  styleUrls: ["./game-content.component.scss"],
})
export class GameContentComponent implements OnInit {
  firstPlayerCard$: Observable<Card>;
  secondPlayerCard$: Observable<Card>;
  constructor(private service: OfflineWarGameDataContainerService) {
    this.firstPlayerCard$ = this.service.actualFirstPlayerCard;
    this.secondPlayerCard$ = this.service.actualSecondPlayerCards;
  }

  ngOnInit() {}
}
