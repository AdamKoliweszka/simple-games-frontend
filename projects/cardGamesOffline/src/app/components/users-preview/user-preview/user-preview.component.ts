import { Component, OnInit, Input } from "@angular/core";
import { User } from "../../../modules/users-state/models/user";

@Component({
  selector: "app-user-preview",
  templateUrl: "./user-preview.component.html",
  styleUrls: ["./user-preview.component.scss"]
})
export class UserPreviewComponent {
  @Input() user: User;
  @Input() points: number;
  @Input() isActive: boolean;

  constructor() {}
}
