import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

import { User } from "../models/user";
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Gender } from "../models/gender";

@Component({
  selector: "app-user-register-form",
  templateUrl: "./user-register-form.component.html",
  styleUrls: ["./user-register-form.component.scss"],
})
export class UserRegisterFormComponent implements OnInit {
  @Output() userSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Input() registerErrors: string[];
  userForm: FormGroup;
  constructor(private authService: AuthService) {
    this.userForm = new FormGroup(
      {
        loginOfUser: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]*"),
        ]),
        emailOfUser: new FormControl("", [
          Validators.required,
          Validators.email,
        ]),
        passwordOfUser: new FormControl("", Validators.required),
        passwordOfUserConfirmation: new FormControl("", [Validators.required]),
        dateOfBirthOfUser: new FormControl("", Validators.required),
        genderOfUser: new FormControl("male", Validators.required),
      },
      { validators: this.identityPasswordValidator }
    );
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

  get passwordOfUserConfirmation() {
    return this.userForm.get("passwordOfUserConfirmation");
  }

  get dateOfBirthOfUser() {
    return this.userForm.get("dateOfBirthOfUser");
  }

  get genderOfUser() {
    return this.userForm.get("genderOfUser");
  }

  get isEmailExistError(): boolean {
    return this.registerErrors.indexOf("EMAIL_EXIST") >= 0;
  }

  get isUsernameExistError(): boolean {
    return this.registerErrors.indexOf("USERNAME_EXIST") >= 0;
  }

  onSubmitForm() {
    if (this.userForm.valid) {
      this.userSubmit.emit({
        username: this.loginOfUser.value.trim(),
        password: this.passwordOfUser.value,
        dateOfBirth: this.dateOfBirthOfUser.value,
        gender:
          this.genderOfUser.value === "male" ? Gender.male : Gender.female,
        email: this.emailOfUser.value,
      } as User);
      this.userForm.markAsUntouched();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  ngOnInit() {}

  identityPasswordValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    const password = control.get("passwordOfUser");
    const passwordConfirmation = control.get("passwordOfUserConfirmation");
    return password &&
      passwordConfirmation &&
      password.value === passwordConfirmation.value
      ? null
      : { difference: true };
  };
}
