import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
import { faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ErgoStudentDataService } from '../ergo-student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public question: Question;
  @Output() public deleteQuestionEvent = new EventEmitter<Question>();
  @ViewChild('answers', { read: ElementRef }) answers: ElementRef;
  faAngleDown= faAngleDown;
  faTimes = faTimes;

  constructor(private _ergoStudentDataService: ErgoStudentDataService, private router : Router) { }

  ngOnInit() {
  }
  expandAnswers() {
    let answersNative = this.answers.nativeElement;
    if(answersNative.classList.contains("shown")) 
     this.answers.nativeElement.classList.remove("shown")
    else
     this.answers.nativeElement.classList.add("shown")
  }
  deleteQuestion() {
    console.log(this.deleteQuestionEvent)
    this.deleteQuestionEvent.emit(this.question);
  }
}
