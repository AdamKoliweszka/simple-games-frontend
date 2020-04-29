import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromUser from "./user-of-service-state.reducers";
import { userOfServiceStateKey } from "./user-of-service-state.key";
import { StoreModule } from "@ngrx/store";
import { UserOfServiceEffect } from "./user-of-service-state.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userOfServiceStateKey, fromUser.reducer),
    EffectsModule.forFeature([UserOfServiceEffect]),
  ],
})
export class UserOfServiceStateModule {}
