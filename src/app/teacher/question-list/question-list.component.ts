import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';
import { Question } from '../question/question.model';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

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

  constructor(private _teacherDataService: TeacherDataService) {
    this.filterQuestion$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterQuestionName = val));
  }

  ngOnInit(): void {
    this._teacherDataService.questions.subscribe(
      questions => {this._questions = questions;console.log(questions)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve questions: ${error.error}`;
      }
    );
  }

  get questions() {
    console.log("get")
    return this._questions;
  }

}
