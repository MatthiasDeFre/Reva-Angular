import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibitor } from './exhibitor/exhibitor.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin.model';

@Injectable()
export class AdminDataService {
  private readonly _appUrl='/API/admin';

  constructor(private http:HttpClient) { }

  get exhibitors():Observable<Exhibitor[]>{
    return this.http.get(`${this._appUrl}/exhibitors`)
    .pipe(map((list:any[]):Exhibitor[]=>list.map(Exhibitor.fromJSON)));
  }

  addNewExhibitor(exhibitor: Exhibitor):Observable<Exhibitor>{
    return this.http.post(`${this._appUrl}/exhibitors/`,exhibitor).pipe(map(Exhibitor.fromJSON));
  }

  modifyExhibitor(exhibitor){
    return this.http.put(`${this._appUrl}/exhibitor/${exhibitor.id}`,{exhibitor:exhibitor}).pipe(map(Exhibitor.fromJSON));
  }

  removeExhibitor(exh:Exhibitor):Observable<Exhibitor>{
    return this.http.delete(`${this._appUrl}/exhibitor/${exh.id}`).pipe(map(Exhibitor.fromJSON));
  }

  getAdmin(id:String):Observable<Admin>{
    return this.http.get(`${this._appUrl}/admin/${id}`).pipe(map(Admin.fromJSON))
  }
}