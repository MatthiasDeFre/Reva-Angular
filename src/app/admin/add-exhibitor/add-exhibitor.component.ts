import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exhibitor } from '../exhibitor/exhibitor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-add-exhibitor',
  templateUrl: './add-exhibitor.component.html',
  styleUrls: ['./add-exhibitor.component.css']
})
export class AddExhibitorComponent implements OnInit {
  @Output() public newExhibitor = new EventEmitter<Exhibitor>();
  private _exhibitors;
  private errorMsg: string;
  public exhibitor: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _adminDataService: AdminDataService) {

  }
  get exhibitors() {
    return this._exhibitors;
  }

  ngOnInit() {
    this._adminDataService.exhibitors.subscribe(
      data => { this._exhibitors = data },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
          } while trying to retrieve exhibitors: ${error.error}`;
      });

    this.exhibitor = this.fb.group({
      questionname: ['', [Validators.required, Validators.minLength(2)]],
      exhibitors: ['']
    });
  }

  onSubmit() {
    const exhibitor = new Exhibitor(this.exhibitor.value.exhibitorname, 'rolstoel');
    this._adminDataService.createExhibitor(exhibitor).subscribe(
      () => {
        this.exhibitor.reset();
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding exhibitor: ${
          exhibitor.name
          }: ${error.error}`;
      }
    );
  }
}

