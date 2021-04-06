import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'mk-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Settings | Material Kit');
	}
}
