import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from "@angular/core";
import { ChatMessage } from "../models/chat-message";

@Component({
  selector: "app-chat-output",
  templateUrl: "./chat-output.component.html",
  styleUrls: ["./chat-output.component.scss"],
})
export class ChatOutputComponent implements OnInit, AfterViewChecked {
  @ViewChild("scrollContainer", { static: false })
  private scrollContainer: ElementRef;

  @Input() chatMessages: ChatMessage[];
  constructor() {}

  ngOnInit() {}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
