import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuestionComponent } from './teacher/question/question.component';
import { QuestionListComponent } from './teacher/question-list/question-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TeacherModule } from './teacher/teacher.module';
import { ErgoStudentModule } from './ergo-student/ergo-student.module';
import { basehttpInterceptorProviders } from './interceptors';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminComponent } from './admin/admin.component';
import { ExhibitorComponent } from './exhibitor/exhibitor.component';
import { ExhibitorDetailComponent } from './admin/exhibitor-detail/exhibitor-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdminComponent,
    ExhibitorComponent,
    ExhibitorDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TeacherModule,
    ErgoStudentModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [basehttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
