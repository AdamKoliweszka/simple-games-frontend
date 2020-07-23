import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";
import { NamesPipeModule } from "../../names-pipe/names-pipe.module";
import { CardContainerModule } from "../../design-components/card-container/card-container.module";
import { ColorsGenderPipe } from "../pipes/colors-gender.pipe";
import { FriendsPipeModule } from "../pipes/friends-pipe.module";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    SearchInputModule,
    NamesPipeModule,
    CardContainerModule,
    FriendsPipeModule,
  ],
})
export class UsersModule {}
