import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { User } from "../../../modules/users-state/models/user";

@Component({
  selector: "app-user-preview",
  templateUrl: "./user-preview.component.html",
  styleUrls: ["./user-preview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPreviewComponent {
  @Input() user: User;
  @Input() points: number;
  @Input() isActive: boolean;

  constructor() {}
}
