import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './header/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { InnerComponent } from "./components/inner/inner.component";
import { QuestionListComponent } from './teacher/question-list/question-list.component';
import { AuthGuardService } from '../../core/auth/auth-guard.service';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: '',
				loadChildren: './components/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'builder',
				loadChildren: './builder/builder.module#BuilderModule'
			},
			{
				path: 'header/actions',
				component: ActionComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'inner',
				component: InnerComponent
			},
			{
				path: "teacher",
				loadChildren: './teacher/teacher.module#TeacherModule',
				data: {
					roles: ["TEACHER"]
				},
				canActivate: [AuthGuardService]
			}
		]
	},
	{
		path: 'login',
		canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				//except: 'ADMIN'
			}
		},
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	},
	
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {
}
