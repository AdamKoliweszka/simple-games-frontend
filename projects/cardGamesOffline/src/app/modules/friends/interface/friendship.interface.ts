import { StatusOfFriendship } from "../enum/status-friendship.enum";

export interface Friendship {
  usernameOfStartingRelationshipUser: string;
  usernameOfSecondUser: string;
  status: StatusOfFriendship;
  dateOfStartRelationship: Date;
}
