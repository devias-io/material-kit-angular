import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './core/components/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'app'
	},
	{
		path: 'app',
		component: DashboardLayoutComponent,
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'dashboard'
			},
			{
				path: 'account',
				loadChildren: () => import('./account/account.module').then((m) => m.AccountModule)
			},
			{
				path: 'customers',
				loadChildren: () => import('./customers/customers.module.js').then((m) => m.CustomersModule)
			},
			{
				path: 'dashboard',
				loadChildren: () => import('./dashboard/dashboard.module.js').then((m) => m.DashboardModule)
			},
			{
				path: 'products',
				loadChildren: () => import('./products/products.module.js').then((m) => m.ProductsModule)
			},
			{
				path: 'settings',
				loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
			}
		]
	},
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{
				path: '404',
				loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule)
			},
			{
				path: 'login',
				loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
			},
			{
				path: 'register',
				loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
