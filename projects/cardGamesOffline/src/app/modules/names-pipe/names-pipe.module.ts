import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NamesPipe } from "./names.pipe";
import { UsernamesPipe } from "./usernames.pipe";

@NgModule({
  declarations: [NamesPipe, UsernamesPipe],
  imports: [CommonModule],
  providers: [NamesPipe, UsernamesPipe],
  exports: [NamesPipe, UsernamesPipe],
})
export class NamesPipeModule {}
