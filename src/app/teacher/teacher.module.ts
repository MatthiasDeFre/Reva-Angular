import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { QuestionComponent } from "./question/question.component";
import { QuestionFilterPipe } from "./question-filter.pipe";
import { QuestionListComponent } from "./question-list/question-list.component";
import { TeacherDataService } from "./teacher-data.service";
import { RouterModule } from "@angular/router";
//import { httpInterceptorProviders, basehttpInterceptorProviders } from "../http-interceptors";

const routes = [
  { path: 'list', component: QuestionListComponent }
];
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
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
    TeacherDataService,
  ]
})
export class TeacherModule { }