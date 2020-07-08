import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { SearchInputModule } from "../../design-components/search-input/search-input.module";
import { NamesPipeModule } from "../../names-pipe/names-pipe.module";
import { CardContainerModule } from "../../design-components/card-container/card-container.module";
import { ColorsGenderPipe } from "../pipes/colors-gender.pipe";

@NgModule({
  declarations: [UsersComponent, ColorsGenderPipe],
  imports: [
    CommonModule,
    SearchInputModule,
    NamesPipeModule,
    CardContainerModule,
  ],
})
export class UsersModule {}
