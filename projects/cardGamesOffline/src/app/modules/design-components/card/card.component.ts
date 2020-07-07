import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() mainIcon: string = "person";
  @Input() colorOfMainIcon: string = "#1059FC";
  @Input() leftIcon: string = "thumb_up_alt";
  @Input() rightIcon: string = "chat";
  @Output() leftButtonClick = new EventEmitter<boolean>();
  @Output() rightButtonClick = new EventEmitter<boolean>();
  @Output() cardClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onLetfButtonClick() {
    this.leftButtonClick.emit(true);
  }

  onRightButtonClick() {
    this.rightButtonClick.emit(true);
  }

  onCardClick() {
    this.cardClick.emit(true);
  }
}
