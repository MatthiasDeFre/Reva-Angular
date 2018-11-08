import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router';
import { Injectable } from '@angular/core';
import { Admin } from './admin.model';
import { AdminDataService } from './admin-data.service';
import { Observable } from 'rxjs';

  
  @Injectable()
  export class RecipeResolver implements Resolve<Admin> {
    constructor(private recipeService: AdminDataService) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<Admin> {
      return this.recipeService.getAdmin(route.params['id']);
    }
  }