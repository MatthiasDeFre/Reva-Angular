export class Question {

   
    private _id: string;
    private _body: string;
    private _answers: string[];
    private _posted: Date;
    private _exhibitor : [string, string];
    private _groupAnswer : string;

    constructor(body: string, answers: string[], posted: Date, exhibitor : [string, string]) {
        this._body = body;
        this._answers = answers;
        this._posted = posted;
        this._exhibitor = exhibitor;
    }

    static fromJSON(json: any): Question {
        console.log(json)
        const question = new Question(
            json.body,
            json.possibleAnswers,
            json.posted,
            [json.exhibitor.category, json.exhibitor.name]
        );
        question._id = json._id;
        return question;
    }
    static fromJSONGroup(json: any) : Question {
        console.log(json)
        const question = new Question(
            json.body,
            json.possibleAnswers,
            json.posted,
            [json.exhibitor.category, json.exhibitor.name]
        );
        question._id = json._id;
        question._groupAnswer = json.answer.answer;
        
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
    get exhibitor() : [string, string] {
        return this._exhibitor;
    }

    get groupAnswer() : string {
        console.log(this._groupAnswer)
        return this._groupAnswer;
    }
}