import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromUsers from "./users-state.reducers";
import { StoreModule } from "@ngrx/store";
import { usersStateKey } from "./users-state.key";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersStateKey, fromUsers.reducer)
  ]
})
export class UsersStateModule {}
