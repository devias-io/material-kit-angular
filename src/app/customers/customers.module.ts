import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersResultsComponent } from './components/customers-results/customers-results.component';
import { CustomersToolbarComponent } from './components/customers-toolbar/customers-toolbar.component';

const routes: Routes = [
	{
		path: '',
		component: CustomersComponent
	}
];

@NgModule({
	declarations: [
		CustomersComponent,
		CustomersResultsComponent,
		CustomersToolbarComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class CustomersModule {}
