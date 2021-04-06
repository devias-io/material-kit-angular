import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
	selector: 'mk-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('404 | Material Kit');
	}
}
