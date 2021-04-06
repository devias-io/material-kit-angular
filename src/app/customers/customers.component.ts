import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from './models/customer.model';
import { customers } from './data';

@Component({
	selector: 'mk-customers',
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
	customers: Customer[] = customers;

	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Customer List | Material Kit');
	}
}
