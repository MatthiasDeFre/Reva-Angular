import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Question } from '../question/question.model';
import { ErgoStudentDataService } from '../ergo-student-data.service';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  //attributes
  public filterQuestionName: string;
  public filterQuestion$ = new Subject<string>();
  public errorMsg: string;
  private _questions: Question[];


  constructor(private _ergoStudentDataService: ErgoStudentDataService) {
    this.filterQuestion$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterQuestionName = val));
  }

  ngOnInit(): void {
    this._ergoStudentDataService.questions.subscribe(
      questions => {this._questions = questions;console.log(questions)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve questions: ${error.error}`;
      }
    );
  }

  removeQuestion(question : Question) {
    console.log("verwijdern groep method aangeroepen in question-list-comp")
   this._ergoStudentDataService.deleteQuestion(question).subscribe(
     item => (this._questions = this._questions.filter(val => question.id !== val.id)),
     (error: HttpErrorResponse) => {
       this.errorMsg = `Error ${error.status} while removing group for ${
         question.body
       }: ${error.error}`;
     }
   );
  }

  get questions() {
    return this._questions;
  }
}
