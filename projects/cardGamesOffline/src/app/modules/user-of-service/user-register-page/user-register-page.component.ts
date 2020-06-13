import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthApiService } from "../services/auth-api.service";
import { AuthService } from "../services/auth.service";
import { UsersService } from "../services/users.service";
import { Gender } from "../models/gender";
import { Observable } from "rxjs";
import { StatusOfRegistration } from "../models/statusOfRegistration";

@Component({
  selector: "app-register-page",
  templateUrl: "./user-register-page.component.html",
  styleUrls: ["./user-register-page.component.scss"],
})
export class UserRegisterPageComponent implements OnInit {
  statusOfRegistration = StatusOfRegistration;

  constructor(private router: Router, private usersService: UsersService) {
    // this.usersService.registerUser({
    //   email: "test@test.pl",
    //   password: "test",
    //   username: "janusz",
    //   dateOfBirth: new Date(),
    //   gender: Gender.male,
    // } as User);
  }

  ngOnInit() {}

  onUserSubmit(user: User) {
    this.usersService.registerUser(user);
  }

  get registerErrors$(): Observable<string[]> {
    return this.usersService.registerErrors;
  }

  get registerStatus$(): Observable<StatusOfRegistration> {
    return this.usersService.statusOfRegistration;
  }

  onNewRegister() {
    this.usersService.resetRegister();
  }
}
