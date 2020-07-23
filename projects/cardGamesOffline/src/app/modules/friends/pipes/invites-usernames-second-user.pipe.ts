import { Pipe, PipeTransform } from "@angular/core";
import { Friendship } from "../interface/friendship.interface";

@Pipe({
  name: "invitesUsernamesSecondUser",
})
export class InvitesUsernamesSecondUserPipe implements PipeTransform {
  transform(friendships: Friendship[]): any {
    return friendships.map((friendship) => {
      return friendship.usernameOfSecondUser;
    });
  }
}
