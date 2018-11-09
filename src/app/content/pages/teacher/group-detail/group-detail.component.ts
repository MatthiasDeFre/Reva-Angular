import { Component, OnInit } from '@angular/core';
import { Group } from '../group/group.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  private _group : Group;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.data.subscribe(item =>   
      this._group = item['group'],
      () => this.router.navigate["**"]
    );
  }
      
  get group() : Group {
    console.log(this._group)
      return this._group;
  }
  get imageUrl() {
    return `http://localhost:3000/API/teachers/image/${this.group.imageString}`
  }

}
