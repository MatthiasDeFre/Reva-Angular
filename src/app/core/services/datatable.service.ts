import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_DATATABLE_URL = 'api/cars';

@Injectable()
export class DataTableService {

	constructor(private http: HttpClient) {
	}
	getAllItems() :  Observable<any[]> {
		return null;
	}

	
}
