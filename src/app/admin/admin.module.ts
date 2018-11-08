import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDataService } from './admin-data.service';
import { AdminComponent } from './admin/admin.component';
import { ExhibitorComponent } from './exhibitor/exhibitor.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitorListComponent } from './exhibitor-list/exhibitor-list.component';


const routes = [

];

@NgModule({
  declarations: [
    AdminComponent, ExhibitorComponent, ExhibitorListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],

  providers: [AdminDataService]
})
export class AdminModule { }
