import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxPermissionsGuard } from 'ngx-permissions';
import { QuestionListComponent } from './question-list/question-list.component';
import { GroupedObservable } from 'rxjs';
import { GroupListComponent } from './group-list/group-list.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [NgxPermissionsGuard],
		children: [
			{
				path: "list",
                component: QuestionListComponent,
                data: {groupA: false}
            },
            {
				path: "groupsanswered",
                component: QuestionListComponent,
                data: {groupA: true}
            },
            {
				path: "groups",
				component: GroupListComponent
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TeacherRoutingModule {
}
