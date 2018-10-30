import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErgoStudentDataService } from "./ergo-student-data.service";
import { QuestionComponent } from "./question/question.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { QuestionFilterPipe } from "./question-filter.pipe";
//import { httpInterceptorProviders, basehttpInterceptorProviders } from "../http-interceptors";

const routes: Routes= [
  { path: 'list', component: QuestionListComponent }
];
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QuestionComponent,
    QuestionFilterPipe,
    QuestionListComponent,
  ],
  providers: [
    //basehttpInterceptorProviders,
    //httpInterceptorProviders,
    ErgoStudentDataService,
  ] 
})
export class TeacherModule { }