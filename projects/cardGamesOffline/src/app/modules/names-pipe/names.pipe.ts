import { Pipe, PipeTransform } from "@angular/core";
import { haveName } from "./have-name.interface";

@Pipe({
  name: "names",
})
export class NamesPipe implements PipeTransform {
  transform(values: haveName[]): string[] {
    if (!values || values.length == 0) return [];
    let names = [];
    values.forEach((value) => {
      names.push(value.name);
    });
    return names;
  }
}
