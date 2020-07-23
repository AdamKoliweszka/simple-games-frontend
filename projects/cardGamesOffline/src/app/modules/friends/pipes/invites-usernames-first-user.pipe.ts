import { Pipe, PipeTransform } from "@angular/core";
import { Friendship } from "../interface/friendship.interface";

@Pipe({
  name: "invitesUsernamesFirstUser",
})
export class InvitesUsernamesFirstUserPipe implements PipeTransform {
  transform(friendships: Friendship[]): any {
    return friendships.map((friendship) => {
      return friendship.usernameOfStartingRelationshipUser;
    });
  }
}
