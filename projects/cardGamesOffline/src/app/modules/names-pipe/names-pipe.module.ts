import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NamesPipe } from "./names.pipe";
import { UsernamesPipe } from "./usernames.pipe";

@NgModule({
  declarations: [NamesPipe],
  imports: [CommonModule],
  providers: [NamesPipe],
  exports: [NamesPipe],
})
export class NamesPipeModule {}
