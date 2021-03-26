import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TeacherModule } from './teacher/teacher.module';
import { ErgoStudentModule } from './ergo-student/ergo-student.module';
import { basehttpInterceptorProviders } from './interceptors';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExhibitorComponent } from './admin/exhibitor/exhibitor.component';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TeacherModule,
    ErgoStudentModule,
    AdminModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [basehttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }