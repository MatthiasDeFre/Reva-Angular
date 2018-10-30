import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name:string;
  exhibitors:string[];
  constructor() { 
    this.name="exposanten";
    this.exhibitors=["Jeroen De Smet", "Alpha", "Beta"];
  }

  ngOnInit() {
  }

}
