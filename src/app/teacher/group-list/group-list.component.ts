import { Component, OnInit } from '@angular/core';
import { TeacherDataService } from '../teacher-data.service';
import { Group } from '../group/group.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  private _groups : Group[];
  private errorMsg : string;
  constructor(private _teacherDataService : TeacherDataService, private router : Router) { }

  ngOnInit(): void {
    this._teacherDataService.groups.subscribe(
      groups => {this._groups = groups;console.log(groups)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve groups: ${error.error}`;
      }
    );
  }
  get groups() {
    return this._groups;
  }
  deleteGroups() {
    this._teacherDataService.deleteGroups().subscribe(
      (item) => {
        console.log(item)
       this._groups = []
      },
      () =>{}
     
    );
   }
   copyToClipboard() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      let codes ="";
      this._groups.forEach(function(group) {
        codes += group.code + " "+ "\r\n";
      })
      e.clipboardData.setData('text/plain', (codes));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
   }
}
