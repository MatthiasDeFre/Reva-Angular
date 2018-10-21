import { Component, OnInit } from '@angular/core';
import { Group } from './group.model';
import { Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TeacherDataService } from '../teacher-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() public group : Group;
  faTimes = faTimes;
  constructor(private _teacherDataService : TeacherDataService, private router : Router) { }

  ngOnInit() {
  }
  deleteGroup() {
    this._teacherDataService.deleteGroup(this.group).subscribe(
      (item) => {
        console.log(item);
      },
      () =>{},
      () => this.router.navigate(["/list"])
    );
  }
}
