import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TeacherDataService } from './teacher/teacher-data.service';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
  
     this.timeLeft = this.timeLeft-1;
    },1000)
  }
  timeLeft = Math.abs(new Date("2018-02-07").getTime() - new Date().getTime());
  title = 'frontend';
  //attributen
  public filterQuestionName: string;
  public filterQuestion$ = new Subject<string>();

  //ctors
  constructor(private _recipeDataService: TeacherDataService) {
    this.filterQuestion$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase()),
        filter(val => !val.startsWith('s'))
      )
      .subscribe(val => (this.filterQuestionName = val));
  }
}
