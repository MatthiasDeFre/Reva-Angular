import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question.model';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public question: Question;
  @ViewChild('answers', { read: ElementRef }) answers: ElementRef;
  faAngleDown= faAngleDown;

  constructor() { }

  ngOnInit() {
  }
  expandAnswers() {
    let answersNative = this.answers.nativeElement;
    if(answersNative.classList.contains("shown")) 
     this.answers.nativeElement.classList.remove("shown")
    else
     this.answers.nativeElement.classList.add("shown")
  }
}
