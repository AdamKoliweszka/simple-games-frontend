import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-of-service-form",
  templateUrl: "./user-of-service-form.component.html",
  styleUrls: ["./user-of-service-form.component.scss"],
})
export class UserOfServiceFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmitForm() {
    this.router.navigate(["games"]);
  }
}
