export class Question {
    private _id: string;
    private _body: string;
    private _answers: string[];
    private _posted: Date;

    constructor(body: string, answers: string[], posted: Date) {
        this._body = body;
        this._answers = answers;
        this._posted = posted;
    }

    static fromJSON(json: any): Question {
        const question = new Question(
            json.body,
            json.possibleAnswers,
            json.posted
        );
        question._id = json._id;
        return question;
    }

    get id(): string {
        return this._id;
    }

    get body(): string {
        return this._body;
    }
    get answers(): string[] {
        return this._answers;
    }
    get posted(): Date {
        return this._posted;
    }
}