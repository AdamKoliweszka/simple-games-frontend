import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { User } from "../models/user";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Gender } from "../models/gender";

@Component({
  selector: "app-user-register-form",
  templateUrl: "./user-register-form.component.html",
  styleUrls: ["./user-register-form.component.scss"],
})
export class UserRegisterFormComponent implements OnInit {
  @Output() userSubmit: EventEmitter<User> = new EventEmitter<User>();
  userForm: FormGroup;
  constructor(private authService: AuthService) {
    this.userForm = new FormGroup({
      loginOfUser: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9]*"),
      ]),
      emailOfUser: new FormControl("", [Validators.required, Validators.email]),
      passwordOfUser: new FormControl("", Validators.required),
      passwordOfUser2: new FormControl("", Validators.required),
      dateOfBirthOfUser: new FormControl("", Validators.required),
      sexOfUser: new FormControl("male", Validators.required),
    });
  }

  get badLogin$() {
    return this.authService.isLastLoginBad;
  }
  get loginOfUser() {
    return this.userForm.get("loginOfUser");
  }

  get emailOfUser() {
    return this.userForm.get("emailOfUser");
  }

  get passwordOfUser() {
    return this.userForm.get("passwordOfUser");
  }

  get passwordOfUser2() {
    return this.userForm.get("passwordOfUser2");
  }

  get dateOfBirthOfUser() {
    return this.userForm.get("dateOfBirthOfUser");
  }

  get sexOfUser() {
    return this.userForm.get("sexOfUser");
  }

  onSubmitForm() {
    if (this.userForm.valid) {
      this.userSubmit.emit({
        username: this.loginOfUser.value.trim(),
        password: this.passwordOfUser.value,
        dateOfBirth: this.dateOfBirthOfUser.value,
        gender: this.sexOfUser.value === "male" ? Gender.male : Gender.female,
      } as User);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  ngOnInit() {}
}
