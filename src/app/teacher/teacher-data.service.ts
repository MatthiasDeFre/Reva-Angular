import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question/question.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class TeacherDataService {

  //attributen
  private readonly _appUrl = '/API';

  //ctors
  constructor(private http: HttpClient) {}

  //methods
  get questions(): Observable<Question[]> {
    return this.http
      .get(`${this._appUrl}/questions/`)
      .pipe(map((list: any[]): Question[] => list.map(Question.fromJSON)));
  }
}
