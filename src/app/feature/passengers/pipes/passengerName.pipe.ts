import { Pipe } from "@angular/core";

@Pipe({
    name: "passengerName",
    standalone: false,
})

export class PassengerNamePipe {
    public transform(name: string): string {
        const splittedName: string[] = name.split(", ");

        if (splittedName.length < 2) {
            return name;
        }

        return `${splittedName[1]} ${splittedName[0]}`;
    }
}