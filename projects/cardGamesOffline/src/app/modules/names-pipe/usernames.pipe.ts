import { Pipe, PipeTransform } from "@angular/core";
import { haveUsername } from "./have-username.interface";

@Pipe({
  name: "usernames",
})
export class UsernamesPipe implements PipeTransform {
  transform(values: haveUsername[]): string[] {
    if (!values || values.length == 0) return [];
    let names = [];
    values.forEach((value) => {
      names.push(value.username);
    });
    return names;
  }
}
