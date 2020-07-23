import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { inject } from "@angular/core/testing";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { throwIfEmpty } from "rxjs/operators";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() name: string;

  @Input() mainIcon: string;
  @Input() clickable: boolean = true;
  @Input() colorOfMainIcon: string;

  @Input() leftIcon: string;
  @Input() leftIconEnable: boolean;

  @Input() rightIcon: string;
  @Input() rightIconEnable: boolean;

  @Output() leftButtonClick = new EventEmitter<boolean>();
  @Output() rightButtonClick = new EventEmitter<boolean>();
  @Output() cardClick = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  onLetfButtonClick() {
    if (this.leftIconEnable) {
      this.leftButtonClick.emit(true);
    }
  }

  onRightButtonClick() {
    if (this.rightIconEnable) {
      this.rightButtonClick.emit(true);
    }
  }

  onCardClick() {
    if (this.clickable) {
      this.cardClick.emit(true);
    }
  }
}
