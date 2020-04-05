import { Component, OnInit } from "@angular/core";
import { UsersDataContainerService } from "../../modules/users-state/services/users-data-container.service";
import { Observable } from "rxjs";
import { User } from "../../modules/users-state/models/user";

@Component({
  selector: "app-users-preview",
  templateUrl: "./users-preview.component.html",
  styleUrls: ["./users-preview.component.scss"]
})
export class UsersPreviewComponent implements OnInit {
  firstUser$: Observable<User>;
  secondUser$: Observable<User>;
  pointsFirstUser$: Observable<number>;
  pointsSecondUser$: Observable<number>;

  constructor(private service: UsersDataContainerService) {
    this.firstUser$ = this.service.firstUser;
    this.secondUser$ = this.service.secondUser;
    this.pointsFirstUser$ = this.service.pointsFirstUser;
    this.pointsSecondUser$ = this.service.pointsSecondUser;
  }

  ngOnInit() {}
}
