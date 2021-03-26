import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Exhibitor } from '../exhibitor/exhibitor.model';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { AdminDataService } from '../admin-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exhibitor-list',
  templateUrl: './exhibitor-list.component.html',
  styleUrls: ['./exhibitor-list.component.css']
})
export class ExhibitorListComponent implements OnInit {
  public filterExhibitorName: string;
  public filterExhibitor$=new Subject<string>();
  public errorMsg: string;
  private _exhibitors: Exhibitor[];

  constructor(private _adminDataService:AdminDataService){
    this.filterExhibitor$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterExhibitorName = val));
  }

  ngOnInit():void {
    this._adminDataService.exhibitors.subscribe(
      exhibitors => {this._exhibitors = exhibitors;console.log(exhibitors)},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve exhibitors: ${error.error}`;
      }
    );
  }

  get exhibitors(){
    return this._exhibitors;
  }

}
