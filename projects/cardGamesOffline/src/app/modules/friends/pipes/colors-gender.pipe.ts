import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../../user-of-service/models/user";
import { Gender } from "../../user-of-service/models/gender";

@Pipe({
  name: "colorsGender",
})
export class ColorsGenderPipe implements PipeTransform {
  transform(users: User[]): string[] {
    let colors = [];
    users.forEach((user) => {
      if (user.gender === Gender.male) colors.push("#1059FC");
      else colors.push("#ECA5AA");
    });
    return colors;
  }
}
