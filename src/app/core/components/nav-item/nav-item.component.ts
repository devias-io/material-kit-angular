import { Component, Input } from '@angular/core';

@Component({
	selector: 'mk-nav-item',
	templateUrl: './nav-item.component.html',
	styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
	@Input() href: string;

	@Input() icon: string;

	@Input() title: string;
}
