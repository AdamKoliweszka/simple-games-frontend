import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"]
})
export class UserFormComponent implements OnInit {
  @Output() users: EventEmitter<string[]> = new EventEmitter<string[]>();
  usersForm: FormGroup;
  constructor() {
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
      this.users.emit([this.firstUser.value, this.secondUser.value]);
    } else {
      this.usersForm.markAllAsTouched();
    }
  }

  ngOnInit() {}
}
