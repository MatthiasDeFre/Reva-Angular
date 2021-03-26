import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibitor } from './exhibitor/exhibitor.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class AdminDataService {
  private readonly _appUrl='/API/admin';

  constructor(private http:HttpClient) { }

  get exhibitors():Observable<Exhibitor[]>{
    return this.http.get(`${this._appUrl}/exhibitors`)
    .pipe(map((list:any[]):Exhibitor[]=>list.map(Exhibitor.fromJSON)));
  }

  createExhibitor(exhibitor: Exhibitor):Observable<Exhibitor>{
    return this.http.post(`${this._appUrl}/exhibitors/`,exhibitor)
    .pipe(map(Exhibitor.fromJSON));
  }

  modifyExhibitor(exhibitor){
    return this.http.put(`${this._appUrl}/exhibitor/${exhibitor.id}`,{exhibitor:exhibitor})
    .pipe(map(Exhibitor.fromJSON));
  }

  deleteExhibitor(exhibitor){
    return this.http.delete(`${this._appUrl}/exhibitor/${exhibitor.id}`);
  }

  deleteExhibitors(){
    return this.http
      .delete(`${this._appUrl}/removeexhibitors/`);
  }
}