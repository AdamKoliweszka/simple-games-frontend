import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromSnackbar from "./snackbar-state.reducers";
import { snackbarStateKey } from "./snackbar-state.key";
import { StoreModule } from "@ngrx/store";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(snackbarStateKey, fromSnackbar.reducer),
  ],
})
export class SnackbarStateModule {}
