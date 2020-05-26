import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { User } from "../models/user";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-user-login-form",
  templateUrl: "./user-login-form.component.html",
  styleUrls: ["./user-login-form.component.scss"],
})
export class UserLoginFormComponent implements OnInit {
  @Output() userSubmit: EventEmitter<User> = new EventEmitter<User>();
  userForm: FormGroup;
  constructor(private authService: AuthService) {
    this.userForm = new FormGroup({
      loginOfUser: new FormControl("", Validators.required),
      passwordOfUser: new FormControl("", Validators.required),
    });
  }

  get badLogin$() {
    return this.authService.isLastLoginBad;
  }
  get loginOfUser() {
    return this.userForm.get("loginOfUser");
  }

  get passwordOfUser() {
    return this.userForm.get("passwordOfUser");
  }

  onSubmitForm() {
    if (this.userForm.valid) {
      this.userSubmit.emit({
        username: this.loginOfUser.value.trim(),
        password: this.passwordOfUser.value,
      } as User);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  ngOnInit() {}
}
