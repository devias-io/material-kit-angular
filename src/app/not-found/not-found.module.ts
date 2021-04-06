import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
	{
		path: '',
		component: NotFoundComponent
	}
];

@NgModule({
	declarations: [
		NotFoundComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class NotFoundModule {}
