import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromUsers from "./users-state.reducers";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature("users", fromUsers.reducer)]
})
export class UsersStateModule {}
