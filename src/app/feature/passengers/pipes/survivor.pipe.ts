import { Pipe } from "@angular/core";

@Pipe({
  name: "survivor",
  standalone: false,
})

export class SurvivorPipe {
  public transform(survived: number): string {
    return survived === 0 ? "deceased" : "survived";
  }
}