import { Gender } from "./gender";

export interface User {
  username: string;
  password: string;
  dateOfBirth?: Date;
  gender?: Gender;
}
