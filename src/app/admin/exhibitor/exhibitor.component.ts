import { Component, OnInit, Input } from '@angular/core';
import { Exhibitor } from './exhibitor.model';

@Component({
  selector: 'app-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.css']
})
export class ExhibitorComponent implements OnInit {
  @Input() public exhibitor:Exhibitor;
  constructor() { }

  ngOnInit() {
  }

}
