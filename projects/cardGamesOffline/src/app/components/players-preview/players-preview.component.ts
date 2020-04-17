import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { OfflinePlayersDataContainerService } from "../../modules/offline-players-state/services/offline-players-data-container.service";
import { Observable } from "rxjs";
import { OfflinePlayer } from "../../modules/offline-players-state/models/offline-player";

@Component({
  selector: "app-players-preview",
  templateUrl: "./players-preview.component.html",
  styleUrls: ["./players-preview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersPreviewComponent implements OnInit {
  firstPlayer$: Observable<OfflinePlayer>;
  secondPlayer$: Observable<OfflinePlayer>;
  activePlayer$: Observable<OfflinePlayer>;

  constructor(private service: OfflinePlayersDataContainerService) {
    this.firstPlayer$ = this.service.getPlayer(0);
    this.secondPlayer$ = this.service.getPlayer(1);
    this.activePlayer$ = this.service.activePlayer;
  }

  ngOnInit() {}
}
