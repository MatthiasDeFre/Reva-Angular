export class User {
    private _name : string;
    private _id : string;
    private _avatar : string;
    private _admin : boolean;
    private _email : string;
    constructor(id : string, name : string, email : string) {
        this._id =id;
        this._name = name;
        this._email = email;
        console.log("naam " + name + " id: " + id);
    }
    get id() : string {
        return this._id;
    }
    get name() : string {
        return this._name;
    }
    get email() : string {
        return this._email;
    }
    static fromJSON(json: any): User {
        const user = new User(
          json._id,
          json.name,
          json.email
        );
        return user;
      }
}