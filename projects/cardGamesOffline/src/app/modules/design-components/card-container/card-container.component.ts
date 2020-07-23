import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card-container",
  templateUrl: "./card-container.component.html",
  styleUrls: ["./card-container.component.scss"],
})
export class CardContainerComponent implements OnInit {
  @Input() names: string[] = [""];

  @Input() mainIcons: string[] = [null];
  @Input() clickables: boolean[] = [true];
  @Input() colorOfMainIcons: string[] = ["black"];

  @Input() leftIcons: string[] = [null];
  @Input() leftIconEnables: boolean[] = [true];

  @Input() rightIcons: string[] = [null];
  @Input() rightIconEnables: boolean[] = [true];

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
