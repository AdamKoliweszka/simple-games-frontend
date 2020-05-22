import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfflinePlayersFormComponent } from "./offline-players-form.component";
import { MaterialModule } from "../../material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [OfflinePlayersFormComponent],
  imports: [CommonModule, MaterialModule, TranslateModule, ReactiveFormsModule],
  exports: [OfflinePlayersFormComponent],
})
export class OfflinePlayersFormModule {}
