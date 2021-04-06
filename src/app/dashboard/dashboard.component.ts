import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'mk-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Dashboard | Material Kit');
	}
}
