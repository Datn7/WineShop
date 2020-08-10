import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PersonListComponent } from './person-list/person-list/person-list.component';
import { AuthGuard } from './_guards/auth.guard';
import { PersonDetailComponent } from './person-detail/person-detail/person-detail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: '',
		runGuardsAndResolvers: 'always',
		canActivate: [ AuthGuard ],
		children: [ { path: 'list', component: PersonListComponent }, { path: 'list/:id', component: PersonDetailComponent } ]
	},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
