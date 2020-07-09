import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"],
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;
  @Output() textSubmit = new EventEmitter<String>();
  @Output() resetSubmit = new EventEmitter<boolean>();
  searchForm = new FormGroup({
    searchInput: new FormControl(""),
  });

  get searchInput() {
    return this.searchForm.get("searchInput");
  }
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.textSubmit.emit(this.searchInput.value);
  }
  onReset() {
    this.searchInput.setValue("");
    this.resetSubmit.emit(true);
  }
}
