import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDataService } from './admin-data.service';
import { ExhibitorComponent } from './exhibitor/exhibitor.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibitorListComponent } from './exhibitor-list/exhibitor-list.component';
import { AddExhibitorComponent } from './add-exhibitor/add-exhibitor.component';
import { ExhibitorFilterPipe } from './exhibitor-filter.pipe';


const routes = [
  {path:'adminList',component:ExhibitorListComponent},
  {path:'add',component:AddExhibitorComponent}
];

@NgModule({
  declarations: [
    ExhibitorComponent,ExhibitorFilterPipe, ExhibitorListComponent, AddExhibitorComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  providers: [AdminDataService]
})
export class AdminModule { }
