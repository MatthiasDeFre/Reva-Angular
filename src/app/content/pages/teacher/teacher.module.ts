import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { QuestionComponent } from "./question/question.component";
import { QuestionFilterPipe } from "./question-filter.pipe";
import { QuestionListComponent } from "./question-list/question-list.component";
import { TeacherDataService } from "./teacher-data.service";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { GroupComponent } from './group/group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeacherRoutingModule } from "./teacher-routing.module";
import { basehttpInterceptorProviders } from "../../../interceptors";
//import { httpInterceptorProviders, basehttpInterceptorProviders } from "../http-interceptors";

const routes: Routes= [
  { path: 'list', component: QuestionListComponent, data: {groupA : false} },
  { path: "groups", component: GroupListComponent},
  { path: 'groupanswered', component: QuestionListComponent, data: {groupA : true} },
];
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    TeacherRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    QuestionComponent,
    QuestionFilterPipe,
    QuestionListComponent,
    GroupComponent,
    GroupListComponent,
  ],
  providers: [
    //basehttpInterceptorProviders,
    //httpInterceptorProviders,
    TeacherDataService,
    basehttpInterceptorProviders
  ] 
})
export class TeacherModule { }