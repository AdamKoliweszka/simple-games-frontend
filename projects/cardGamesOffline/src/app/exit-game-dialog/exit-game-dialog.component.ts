import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-exit-game-dialog",
  templateUrl: "./exit-game-dialog.component.html",
  styleUrls: ["./exit-game-dialog.component.scss"]
})
export class ExitGameDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ExitGameDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
