import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	}
];

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class LoginModule {}
