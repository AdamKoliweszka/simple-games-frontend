import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExitGameDialogComponent } from "./exit-game-dialog.component";
import { MaterialModule } from "../modules/material/material.module";
import { ExitGameGuardService } from "./guard/exit-game-guard.service";

@NgModule({
  declarations: [ExitGameDialogComponent],
  imports: [CommonModule, MaterialModule],
  entryComponents: [ExitGameDialogComponent],
  providers: [ExitGameGuardService]
})
export class ExitGameDialogModule {}
