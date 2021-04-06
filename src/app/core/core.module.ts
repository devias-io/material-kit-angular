import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidenavComponent } from './components/dashboard-sidenav/dashboard-sidenav.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
	declarations: [
		DashboardLayoutComponent,
		DashboardNavbarComponent,
		DashboardSidenavComponent,
		MainLayoutComponent,
		MainNavbarComponent,
		NavItemComponent
	],
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		BrowserModule,
		SharedModule
	],
	exports: []
})
export class CoreModule {}
