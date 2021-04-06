import {
	Component,
	OnDestroy,
	OnInit,
	ViewChild
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
	MatDrawerMode,
	MatSidenav,
	MatSidenavContent
} from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'mk-dashboard-layout',
	templateUrl: './dashboard-layout.component.html',
	styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
	@ViewChild('sidenav') sidenav: MatSidenav;

	@ViewChild('sidenavContent') sidenavContent: MatSidenavContent;

	defaultOpen: boolean;

	mode: MatDrawerMode;

	breakpointSubscription: Subscription;

	routerSubscription: Subscription;

	constructor(
		private breakpointObserver: BreakpointObserver,
		private router: Router
	) {
		this.mode = this.breakpointObserver.isMatched([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium
		]) ? 'over' : 'side';
		this.defaultOpen = this.mode !== 'over';
	}

	ngOnInit(): void {
		this.breakpointSubscription = this.breakpointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium
		]).subscribe((state) => {
			this.mode = state.matches ? 'over' : 'side';

			if (this.sidenav) {
				if (this.mode === 'side' && !this.sidenav.opened) {
					this.sidenav.open();
				}

				if (this.mode === 'over' && this.sidenav.opened) {
					this.sidenav.close();
				}
			}
		});

		this.routerSubscription = this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd)
		).subscribe(() => {
			if (this.sidenav) {
				if (this.mode === 'over' && this.sidenav.opened) {
					this.sidenav.close();
				}
			}
		});
	}

	ngOnDestroy(): void {
		this.routerSubscription.unsubscribe();
		this.breakpointSubscription.unsubscribe();
	}

	onSidenavToggle() {
		this.sidenav.toggle();
	}

	onRouteActivate(_event) {
		if (this.sidenavContent) {
			this.sidenavContent.scrollTo({
				left: 0,
				top: 0
			});
		}
	}
}
