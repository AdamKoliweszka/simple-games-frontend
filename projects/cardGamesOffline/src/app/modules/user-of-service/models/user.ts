import { Sex } from "./sex";

export interface User {
  username: string;
  password: string;
  dateOfBirth?: Date;
  sex?: Sex;
}
