import { Component, OnInit } from '@angular/core';
import { Group } from './group.model';
import { Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TeacherDataService } from '../teacher-data.service';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() public group : Group;
  @Output() public deleteGroupEvent = new EventEmitter<Group>();
  faTimes = faTimes;
  constructor(private _teacherDataService : TeacherDataService, private router : Router) { }

  ngOnInit() {
  }
  deleteGroup() {
    console.log(this.deleteGroupEvent)
    this.deleteGroupEvent.emit(this.group);
  }
  groupDetail() {
    console.log();
    this.router.navigate([`/teacher/group/${this.group.id}`]);
  }
}
