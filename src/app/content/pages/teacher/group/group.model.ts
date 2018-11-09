export class Group {
    private _id : String;
    private _code : String;
    private _name : String;
    private _imageString : String;
    get id() {
        return this._id;
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    get imageString() {
        return this._imageString;
    }
    static fromJSON(json: any): Group {
        const group = new Group();
        group._id = json._id;
        group._code = json.code.toUpperCase();
        group._name = json.name;
        group._imageString = json.imageString;
        return group;
    }
}