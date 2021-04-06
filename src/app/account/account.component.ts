import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/user.model';

@Component({
	selector: 'mk-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
	user: User = {
		avatar: 'assets/images/avatars/avatar_6.png',
		city: 'Los Angeles',
		country: 'USA',
		email: 'demo@devias.io',
		firstName: 'Katarina',
		jobTitle: 'Senior Developer',
		lastName: 'Smith',
		name: 'Katarina Smith',
		phone: '',
		state: 'Alabama',
		timezone: 'GTM-7'
	};

	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Account | Material Kit');
	}
}
