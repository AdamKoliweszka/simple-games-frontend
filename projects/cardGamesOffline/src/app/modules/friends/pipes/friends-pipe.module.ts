import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsernamesPipe } from "../../names-pipe/usernames.pipe";
import { ColorsGenderPipe } from "./colors-gender.pipe";
import { InvitesUsernamesFirstUserPipe } from "./invites-usernames-first-user.pipe";
import { InvitesUsernamesSecondUserPipe } from "./invites-usernames-second-user.pipe";

@NgModule({
  declarations: [
    UsernamesPipe,
    ColorsGenderPipe,
    InvitesUsernamesFirstUserPipe,
    InvitesUsernamesSecondUserPipe,
  ],
  imports: [CommonModule],
  providers: [
    UsernamesPipe,
    ColorsGenderPipe,
    InvitesUsernamesFirstUserPipe,
    InvitesUsernamesSecondUserPipe,
  ],
  exports: [
    UsernamesPipe,
    ColorsGenderPipe,
    InvitesUsernamesFirstUserPipe,
    InvitesUsernamesSecondUserPipe,
  ],
})
export class FriendsPipeModule {}
