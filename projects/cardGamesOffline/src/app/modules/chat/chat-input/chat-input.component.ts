import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-chat-input",
  templateUrl: "./chat-input.component.html",
  styleUrls: ["./chat-input.component.scss"],
})
export class ChatInputComponent implements OnInit {
  @Output() messageSubmit: EventEmitter<string> = new EventEmitter<string>();
  chatForm: FormGroup;

  constructor() {
    this.chatForm = new FormGroup({
      message: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  get message() {
    return this.chatForm.get("message");
  }

  sendMessage() {
    if (this.message.valid) {
      this.messageSubmit.emit(this.message.value);
      this.message.setValue("");
    }
  }
}
