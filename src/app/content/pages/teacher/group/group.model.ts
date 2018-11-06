export class Group {
    private _id : String;
    private _code : String;
    private _name : String;
    get id() {
        return this._id;
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    static fromJSON(json: any): Group {
        const group = new Group();
        console.log(json)
        group._id = json._id;
        group._code = json.code.toUpperCase();
        group._name = json.name;
        return group;
    }
}