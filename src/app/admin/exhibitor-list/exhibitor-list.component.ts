import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Exhibitor } from '../exhibitor/exhibitor.model';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { AdminDataService } from '../admin-data.service';

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


  ngOnInit() {
  }

}
