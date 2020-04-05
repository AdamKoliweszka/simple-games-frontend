import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ExitGameDialogComponent } from "../exit-game-dialog.component";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ExitGameDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): Observable<boolean> {
    console.log("test");
    return of(true);
    // const dialogRef = this.dialog.open(ExitGameDialogComponent, {
    //   width: "250px"
    // });

    // return dialogRef.afterClosed();
  }
}
