import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-load-spinner",
  templateUrl: "./load-spinner.component.html",
  styleUrls: ["./load-spinner.component.scss"],
})
export class LoadSpinnerComponent implements OnInit {
  // backgroundColor = "#FFFFFF";
  @Input() backgroundColor: String;
  constructor() {}

  ngOnInit() {}
}
