import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { OfflinePlayer } from "../../../modules/offline-players-state/models/offline-player";

@Component({
  selector: "app-player-preview",
  templateUrl: "./player-preview.component.html",
  styleUrls: ["./player-preview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPreviewComponent {
  @Input() player: OfflinePlayer;
  @Input() isActive: boolean;

  constructor() {}
}
