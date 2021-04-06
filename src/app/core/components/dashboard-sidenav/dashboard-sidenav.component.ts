import { Component } from '@angular/core';

@Component({
	selector: 'mk-dashboard-sidenav',
	templateUrl: './dashboard-sidenav.component.html',
	styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent {
	items = [
		{
			href: '/app/dashboard',
			icon: 'bar-chart',
			title: 'Dashboard'
		},
		{
			href: '/app/customers',
			icon: 'users',
			title: 'Customers'
		},
		{
			href: '/app/products',
			icon: 'shopping-bag',
			title: 'Products'
		},
		{
			href: '/app/account',
			icon: 'user',
			title: 'Account'
		},
		{
			href: '/app/settings',
			icon: 'settings',
			title: 'Settings'
		},
		{
			href: '/login',
			icon: 'lock',
			title: 'Login'
		},
		{
			href: '/register',
			icon: 'user-plus',
			title: 'Register'
		},
		{
			href: '/404',
			icon: 'alert-circle',
			title: 'Error'
		}
	];

	opened: boolean;

	user = {
		avatar: 'assets/images/avatars/avatar_6.png',
		jobTitle: 'Senior Developer',
		name: 'Katarina Smith'
	};
}
