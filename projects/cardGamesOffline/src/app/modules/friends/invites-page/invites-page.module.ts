import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvitesPageComponent } from "./invites-page.component";
import { LineSeparatorModule } from "../../design-components/line-separator/line-separator.module";
import { CardContainerModule } from "../../design-components/card-container/card-container.module";
import { InvitesUsernamesSecondUserPipe } from "../pipes/invites-usernames-second-user.pipe";
import { InvitesUsernamesFirstUserPipe } from "../pipes/invites-usernames-first-user.pipe";
import { TranslateModule } from "@ngx-translate/core";
import { FriendsPipeModule } from "../pipes/friends-pipe.module";

@NgModule({
  declarations: [InvitesPageComponent],
  imports: [
    CommonModule,
    LineSeparatorModule,
    CardContainerModule,
    TranslateModule,
    FriendsPipeModule,
  ],
})
export class InvitesPageModule {}
