import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';

const routes: Routes = [
	{
		path: '',
		component: RegisterComponent
	}
];

@NgModule({
	declarations: [
		RegisterComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class RegisterModule {}
