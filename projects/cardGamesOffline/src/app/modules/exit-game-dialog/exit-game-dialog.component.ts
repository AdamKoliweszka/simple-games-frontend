import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-exit-game-dialog",
  templateUrl: "./exit-game-dialog.component.html",
  styleUrls: ["./exit-game-dialog.component.scss"]
})
export class ExitGameDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ExitGameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
