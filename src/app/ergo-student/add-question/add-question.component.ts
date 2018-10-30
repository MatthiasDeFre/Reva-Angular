import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ErgoStudentDataService } from '../ergo-student-data.service';
import { Question } from '../question/question.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  @Output() public newQuestion = new EventEmitter<Question>();
  public question: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _ergoStudentDataService: ErgoStudentDataService
  ) {}

  get answers(): FormArray {
    return <FormArray>this.question.get('answers');
  }

  ngOnInit() {
    this.question = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      answers: this.fb.array([this.createAnswers()])
      //exhibitor
    });
  }

  createAnswers(): FormGroup {
    return this.fb.group({
      answername: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  onSubmit() {
    const question = new Question(this.question.value.name,this.question.value.answers,new Date(), null);

    for (const ans of this.question.value.answers) {
      if (ans.length > 2) {
        const answer = ans.body;
        question.addAnswer(ans);
      }
    }

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
