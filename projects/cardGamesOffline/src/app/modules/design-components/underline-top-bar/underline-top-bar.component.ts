import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-underline-top-bar",
  templateUrl: "./underline-top-bar.component.html",
  styleUrls: ["./underline-top-bar.component.scss"],
})
export class UnderlineTopBarComponent implements OnInit {
  @Input() items: string[];
  @Input() activeIndex: number;
  @Output() clickItem: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(index: number) {
    if (index !== this.activeIndex) this.clickItem.emit(index);
  }
}
