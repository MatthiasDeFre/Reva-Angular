import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question/question.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErgoStudentDataService {

  //attr
  private readonly _appUrl = '/API/ergo';
  //ctor
  constructor(private http: HttpClient) {}
  //methods
  get questions(): Observable<Question[]> {
    return this.http
      .get(`${this._appUrl}/questions/`)
      .pipe(map((list: any[]): Question[] => list.map(Question.fromJSON)));
  }
/*   get exhibitors(): Observable<Exhibitor[]> {
    return this.http
    .get(`${this._appUrl}/exhibitors/`)
    .pipe(map((list: any[]): Exhibitor[] => list.map(Exhibitor.fromJSON)));
  } */

  createQuestion(question: Question) : Observable<Question> {
    return this.http.post(`${this._appUrl}/question/`, question).pipe(map(Question.fromJSON));
  }
  modifyQuestion(question) {
    return this.http.put(`${this._appUrl}/question/${question.id}`, {question:question}).pipe(map(Question.fromJSON));
  }
  deleteQuestions() {
    return this.http
      .delete(`${this._appUrl}/removequestions/`);
  }
  deleteQuestion(question){
    return this.http
      .delete(`${this._appUrl}/question/${question.id}`);
  }
}
