import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
	AlertCircle,
	BarChart,
	Lock,
	Menu,
	Search,
	Settings,
	ShoppingBag,
	User,
	UserPlus,
	Users
} from 'angular-feather/icons';

const icons = {
	AlertCircle,
	BarChart,
	Lock,
	Menu,
	Search,
	Settings,
	ShoppingBag,
	User,
	UserPlus,
	Users
};

@NgModule({
	declarations: [],
	imports: [
		FeatherModule.pick(icons)
	],
	exports: [
		FeatherModule
	]
})
export class FeatherIconsModule {}
