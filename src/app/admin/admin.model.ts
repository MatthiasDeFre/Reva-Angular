import { Exhibitor } from "./exhibitor/exhibitor.model";

export class Admin {
    private _id: string;
    private _name: string;
    private _exhibitors: Exhibitor[];

    constructor(
        name: string,
        exhibitors: Exhibitor[] = [],
    ) {
        this._name = name;
        this._exhibitors = exhibitors;
    }

    static fromJSON(json: any): Admin {
        const exh = new Admin(json.name, json.exhibitors.map(Exhibitor.fromJSON));
        exh._id = json._id;
        return exh;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            exhibitors: this._exhibitors
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): String {
        return this._name;
    }

    get exhibitors(): Exhibitor[] {
        return this._exhibitors;
    }
    addExhibitor(exh: Exhibitor) {
        this._exhibitors.push(exh);
    }
}