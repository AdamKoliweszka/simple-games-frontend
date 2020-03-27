import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { User } from "projects/cardGamesOffline/src/app/modules/users-state/models/user";
import { UsersDataContainerService } from "../../../modules/users-state/services/users-data-container.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  userOne$: Observable<User>;
  usersForm: FormGroup;
  constructor(
    private usersDataContainerService: UsersDataContainerService,
    private router: Router
  ) {
    this.userOne$ = this.usersDataContainerService.firstUser;
    this.usersForm = new FormGroup({
      firstUser: new FormControl("", Validators.required),
      secondUser: new FormControl("", Validators.required)
    });
  }

  get firstUser() {
    return this.usersForm.get("firstUser");
  }

  get secondUser() {
    return this.usersForm.get("secondUser");
  }

  onSubmitForm() {
    if (this.usersForm.valid) {
      this.usersDataContainerService.initFirstUser(this.firstUser.value);
      this.usersDataContainerService.initSecondUser(this.secondUser.value);
      this.router.navigate(["game-select"]);
    } else {
      this.usersForm.markAllAsTouched();
    }
  }

  ngOnInit() {}
}
