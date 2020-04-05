import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExitGameDialogComponent } from "./exit-game-dialog.component";
import { MaterialModule } from "../modules/material/material.module";
import { ExitGameDialogService } from "./service/exit-game-dialog.service";
import { ExitGameGuardService } from "./guard/exit-game-guard.service";

@NgModule({
  declarations: [ExitGameDialogComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ExitGameDialogComponent],
  entryComponents: [ExitGameDialogComponent],
  providers: [ExitGameDialogService, ExitGameGuardService]
})
export class ExitGameDialogModule {}
