import { Pipe } from "@angular/core";

@Pipe({
    name: "city",
    standalone: false,
})
export class CityPipe {
    public transform(cityCapitalLetter: string | null): string {
        if (cityCapitalLetter === 'S') {
            return 'Southampton';
        } else if (cityCapitalLetter === 'C') {
            return 'Cherbourg';
        } else if (cityCapitalLetter === 'Q') {
            return 'Queenstown';
        }
        return cityCapitalLetter || 'Unknown';
    }
}