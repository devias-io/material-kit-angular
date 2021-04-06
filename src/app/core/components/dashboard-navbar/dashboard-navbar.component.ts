import {
	Component,
	EventEmitter,
	Output
} from '@angular/core';

@Component({
	selector: 'mk-dashboard-navbar',
	templateUrl: './dashboard-navbar.component.html',
	styleUrls: ['./dashboard-navbar.component.scss']
})
export class DashboardNavbarComponent {
	@Output() toggleSidenav = new EventEmitter();

	onToggleSidenav(): void {
		this.toggleSidenav.emit(true);
	}
}
