import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.scss"],
})
export class CardContainerComponent implements OnInit {
  @Input() names: string[];
  @Input() colorsOfMainIcons: string[];
  @Input() leftIconEnables: boolean[];
  @Input() leftIcon: string;
  @Output() leftButtonClick = new EventEmitter<number>();
  @Output() rightButtonClick = new EventEmitter<number>();
  @Output() cardClick = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onLeftButtonClick(index: number) {
    this.leftButtonClick.emit(index);
  }
  onRightButtonClick(index: number) {
    this.rightButtonClick.emit(index);
  }
  onCardClick(index: number) {
    this.cardClick.emit(index);
  }
}
