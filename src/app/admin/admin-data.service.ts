import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibitor } from './exhibitor/exhibitor.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdminDataService {
  private readonly _appUrl='/API/';

  constructor(private http:HttpClient) { }

  get exhibitors():Observable<Exhibitor[]>{
    return this.http.get(`${this._appUrl}/exhibitors`)
    .pipe(map((list:any[]):Exhibitor[]=>list.map(Exhibitor.fromJSON)));
  }

  addNewExhibitor(exhibitor: Exhibitor):Observable<Exhibitor>{
    return this.http.post(`${this._appUrl}/exhibitors/`,exhibitor).pipe(map(Exhibitor.fromJSON));
  }

  removeExhibitor(exh:Exhibitor):Observable<Exhibitor>{
    return this.http.delete(`${this._appUrl}/exhibitor/${exh.id}`).pipe(map(Exhibitor.fromJSON));
  }

  getExhibitor(id:String):Observable<Exhibitor>{
    return this.http.get(`${this._appUrl}/exhibitor/${id}`).pipe(map(Exhibitor.fromJSON))
  }
}