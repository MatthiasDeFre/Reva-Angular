import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ErgoStudentDataService } from '../ergo-student-data.service';
import { Question } from '../question/question.model';
import { HttpErrorResponse } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() public newQuestion = new EventEmitter<Question>();
  private _exhibitors;
  private _questions;
  private _categories;
  public question: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _ergoStudentDataService: ErgoStudentDataService
  ) { }

  get answers(): FormArray {
    return <FormArray>this.question.get('answers');
  }

  get exhibitors() {
    return this._exhibitors;
  }

  get questions() {
    return this._questions;
  }

  get categories() {
    return this._categories;
  }

  ngOnInit() {
    this._ergoStudentDataService.exhibitors.subscribe(
      data => {this._exhibitors = data},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve exhibitors: ${error.error}`;
      }
    );
    this._ergoStudentDataService.categories.subscribe(
      data => {this._categories = data},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve questions: ${error.error}`;
      }
    );

    this.question = this.fb.group({
      questionname: ['', [Validators.required, Validators.minLength(2)]],
      answers: this.fb.array([this.createAnswers()]),
      exhibitors: ['']
    });

    this.answers.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(ingList => {
        const lastElement = ingList[ingList.length - 1];
        if (
          lastElement.answername &&
          lastElement.answername.length > 2
        ) {
          console.log("hij pusht")
          this.answers.push(this.createAnswers());
        } else if (ingList.length >= 2) {
          const secondToLast = ingList[ingList.length - 2];
          if (
            !lastElement.answername &&
            (!secondToLast.answername ||
              secondToLast.answername.length < 2)
          ) {
            this.answers.removeAt(this.answers.length - 1);
          }
        }
      });
  }

  createAnswers(): FormGroup {
    return this.fb.group({
      answername: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    const question = new Question(this.question.value.questionname, this.question.value.answers.slice(0,this.question.value.answers.length - 1), new Date(), this.question.value.exhibitors);
    console.log(new Question(this.question.value.questionname, this.question.value.answers.slice(0,this.question.value.answers.length - 1), new Date(), this.question.value.exhibitors));
/*     for (const ans of this.question.value.answers) {
      if (ans.answername.length > 2) {
        const answer = this.question.value.answername;
        question.addAnswer(answer);
      }
    } */

    this._ergoStudentDataService.createQuestion(question).subscribe(
      () => {
        this.question.reset();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding question for ${
          question.body
          }: ${error.error}`;
      }
    );
  }
}
