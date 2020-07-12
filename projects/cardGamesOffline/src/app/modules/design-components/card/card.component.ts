import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { inject } from "@angular/core/testing";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  _colorOfMainIcon = "#1059FC";
  _leftIconEnable = true;
  _leftIcon: string = "thumb_up_alt";
  _rightIcon: string = "chat";
  _mainIcon: string = "person";

  @Input() name: string;
  @Input() mainIcon: string = "person";
  @Input() set colorOfMainIcon(colorOfMainIcon: string) {
    if (colorOfMainIcon) this._colorOfMainIcon = colorOfMainIcon;
  }
  @Input() set leftIconEnable(leftIconEnable: boolean) {
    if (leftIconEnable !== null) this._leftIconEnable = leftIconEnable;
  }
  @Input() set leftIcon(leftIcon: string) {
    if (leftIcon) this._leftIcon = leftIcon;
  }
  @Input() set rightIcon(rightIcon: string) {
    if (rightIcon) this._rightIcon = rightIcon;
  }
  @Output() leftButtonClick = new EventEmitter<boolean>();
  @Output() rightButtonClick = new EventEmitter<boolean>();
  @Output() cardClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onLetfButtonClick() {
    if (this._leftIconEnable) {
      this.leftButtonClick.emit(true);
    }
  }

  onRightButtonClick() {
    this.rightButtonClick.emit(true);
  }

  onCardClick() {
    this.cardClick.emit(true);
  }
}
