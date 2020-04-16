import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-offline-players-form",
  templateUrl: "./offline-players-form.component.html",
  styleUrls: ["./offline-players-form.component.scss"],
})
export class OfflinePlayersFormComponent implements OnInit {
  @Output() players: EventEmitter<string[]> = new EventEmitter<string[]>();
  playersForm: FormGroup;
  constructor() {
    this.playersForm = new FormGroup({
      firstPlayer: new FormControl("", Validators.required),
      secondPlayer: new FormControl("", Validators.required),
    });
  }

  get firstPlayer() {
    return this.playersForm.get("firstPlayer");
  }

  get secondPlayer() {
    return this.playersForm.get("secondPlayer");
  }

  onSubmitForm() {
    if (this.playersForm.valid) {
      this.players.emit([this.firstPlayer.value, this.secondPlayer.value]);
    } else {
      this.playersForm.markAllAsTouched();
    }
  }

  ngOnInit() {}
}
