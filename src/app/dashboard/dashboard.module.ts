import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BudgetComponent } from './components/budget/budget.component';
import { LatestOrdersComponent } from './components/latest-orders/latest-orders.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { SalesComponent } from './components/sales/sales.component';
import { TasksProgressComponent } from './components/tasks-progress/tasks-progress.component';
import { TotalCustomersComponent } from './components/total-customers/total-customers.component';
import { TotalProfitComponent } from './components/total-profit/total-profit.component';
import { TrafficByDeviceComponent } from './components/traffic-by-device/traffic-by-device.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	}
];

@NgModule({
	declarations: [
		DashboardComponent,
		BudgetComponent,
		LatestOrdersComponent,
		LatestProductsComponent,
		SalesComponent,
		TasksProgressComponent,
		TotalCustomersComponent,
		TotalProfitComponent,
		TrafficByDeviceComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class DashboardModule {}
