import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-line-separator",
  templateUrl: "./line-separator.component.html",
  styleUrls: ["./line-separator.component.scss"],
})
export class LineSeparatorComponent implements OnInit {
  @Input() text: string;
  constructor() {}

  ngOnInit() {}
}
