import { Pipe, PipeTransform } from "@angular/core";
import { Exhibitor } from "./exhibitor/exhibitor.model";

@Pipe({
    name: 'questionFilter'
})
export class ExhibitorFilterPipe implements PipeTransform {

    transform(exhibitors: Exhibitor[], name: string): Exhibitor[] {
        if (!name || name.length === 0) {
            return exhibitors;
        }
        return exhibitors.filter(exhibitor =>
            exhibitor.name.toLowerCase().startsWith(name.toLowerCase())
        );
    }
}