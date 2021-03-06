import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';
import { Question } from '../question/question.model';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private _teacherDataService: TeacherDataService, private route : ActivatedRoute) {
    this.filterQuestion$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterQuestionName = val));
  }

  ngOnInit(): void {
    this.route.data.subscribe(v => {
      let answered = v.groupA;
      console.log(answered)
      if(answered) {
        this.subscribeWithAnswer()
      } else {
        this.subscribeWithoutAnswer();
      }
    })
   
  }

  get questions() {
    console.log("get")
    return this._questions;
  }

  private subscribeWithoutAnswer() {
    this._teacherDataService.questions.subscribe(
      questions => {this._questions = questions;console.log(questions)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve questions: ${error.error}`;
      }
    );
  }
  private subscribeWithAnswer() {
    this._teacherDataService.questionsAnswered.subscribe(
      questions => {this._questions = questions;console.log(questions)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve questions: ${error.error}`;
      }
    );
  }
  

}
