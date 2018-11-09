import { Component, OnInit, Input } from '@angular/core';
import { Admin } from '../admin.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Input() public admin: Admin;
  exhibitors:string[];
  constructor() { 
  }


  ngOnInit() {
  }

}
