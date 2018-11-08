export class Exhibitor {
    private _id: string;
    private _name: string;
    private _category: string;

    constructor(
        name: string,
        category: string,
    ) {
        this._name = name;
        this._category = category;
    }

    static fromJSON(json: any): Exhibitor {
        const exhibitor = new Exhibitor(
            json.name,
            json.category
        );
        exhibitor._id = json._id;
        return exhibitor;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get category(): string {
        return this._category;
    }
}