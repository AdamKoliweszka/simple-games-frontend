import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPreviewComponent } from "./users-preview.component";
import { UserPreviewModule } from "./user-preview/user-preview.module";

@NgModule({
  declarations: [UsersPreviewComponent],
  imports: [CommonModule, UserPreviewModule],
  exports: [UsersPreviewComponent]
})
export class UsersPreviewModule {}
