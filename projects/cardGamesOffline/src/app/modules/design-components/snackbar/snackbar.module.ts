import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SnackbarComponent } from "./snackbar.component";
import { SnackbarStateModule } from "./snackbar-state/snackbar-state.module";

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, SnackbarStateModule],
})
export class SnackbarModule {}
