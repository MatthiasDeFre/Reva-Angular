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
import { basehttpInterceptorProviders } from './interceptors';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderService } from './core/services/layout/header.service';
import { HeaderComponent } from './content/layout/header/header.component';
import { BrandComponent } from './content/layout/header/brand/brand.component';
import { TopbarComponent } from './content/layout/header/topbar/topbar.component';
import { MenuHorizontalComponent } from './content/layout/header/menu-horizontal/menu-horizontal.component';
import { GestureConfig, MatProgressSpinnerModule, MatProgressSpinner, MatProgressBarModule, MatTooltipModule, MatTabsModule } from '@angular/material';
import { NotificationComponent } from './content/layout/header/topbar/notification/notification.component';
import { QuickActionComponent } from './content/layout/header/topbar/quick-action/quick-action.component';
import { JoinPipe } from './core/pipes/join.pipe';
import { GetObjectPipe } from './core/pipes/get-object.pipe';
import { PartialsModule } from './content/partials/partials.module';
import { CoreModule } from './core/core.module';
import { TimelineItemComponent } from './content/partials/layout/quick-sidebar/list-timeline/timeline-item/timeline-item.component';
import { ListTimelineModule } from './content/partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutRefService } from './core/services/layout/layout-ref.service';
import { LayoutConfigService } from './core/services/layout-config.service';
import { UtilsService } from './core/services/utils.service';
import { LayoutConfigStorageService } from './core/services/layout-config-storage.service';
import { ClassInitService } from './core/services/class-init.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MenuHorizontalService } from './core/services/layout/menu-horizontal.service';
import { MenuConfigService } from './core/services/menu-config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    BrandComponent,
    TopbarComponent,
    MenuHorizontalComponent,
    NotificationComponent,
    QuickActionComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TeacherModule,
    AppRoutingModule,
    FontAwesomeModule,
    PartialsModule,
    MatProgressBarModule,
    MatTooltipModule,
    PerfectScrollbarModule,
    ListTimelineModule,
    MatTabsModule,
    CoreModule,
    BrowserAnimationsModule
   
  ],
  providers: [basehttpInterceptorProviders, HeaderService, LayoutRefService,LayoutConfigStorageService, LayoutConfigService, UtilsService, ClassInitService, LoadingBarService, MenuHorizontalService, MenuConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
