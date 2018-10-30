export class Exhibitor {
    private _id: string;
    private _name: string;
    private _category: string;

    static fromJSON(json): Exhibitor{
        const rec= new Exhibitor(json.name,json.category);
        rec._id=json._id;
        return rec;
    }

    constructor(
        name: string,
        category:string="categorie"
    ) {
        this._name = name;
        this._category=category;
    }

    get id():string{
        return this._id;
    }
    get name(): string{
        return this._name;
    }

    get category(): string{
        return this._category;
    }

    toJSON(){
        return{
            _id:this._id,
            name: this._name,
            category:this._category
        };
    }
}