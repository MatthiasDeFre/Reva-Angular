import { Pipe, PipeTransform } from "@angular/core";
import { Exhibitor } from "./exhibitor/exhibitor.model";
import { Admin } from "./admin.model";

@Pipe({
    name:'adminFilter'
})
export class AdminFilterPipe implements PipeTransform{
    transform(exhibitors: Exhibitor[], name:string): Exhibitor[] {
        if(!name || name.length===0){
            return exhibitors;
        }
        return exhibitors.filter(ad => ad.name && ad.name.toLowerCase().startsWith(name.toLowerCase()))
    }

}