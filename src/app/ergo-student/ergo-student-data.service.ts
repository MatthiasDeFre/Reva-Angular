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
  private readonly _appUrl = '/API/ergostudent';
  //ctor
  constructor(private http: HttpClient) {}
  //methods
  get questions(): Observable<Question[]> {
    return this.http
      .get(`${this._appUrl}/questions/`)
      .pipe(map((list: any[]): Question[] => list.map(Question.fromJSON)));
  }
  createQuestions(amount) : Observable<Question[]> {
    return this.http.post(`${this._appUrl}/makequestions/`, {amount:amount}).pipe(map((list: any[]): Question[] => list.map(Question.fromJSON)));
  }
  modifyQuestion(question) {
    return this.http.put(`${this._appUrl}/modifyquestion/${question.id}`, {question:question}).pipe(map(Question.fromJSON));
  }
  deleteQuestions() {
    return this.http
      .delete(`${this._appUrl}/removeQuestions/`);
  }
  deleteQuestion(question){
    return this.http
      .delete(`${this._appUrl}/removeQuestion/${question.id}`);
  }
}
