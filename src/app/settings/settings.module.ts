import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NotificationsSettingsComponent } from './components/notifications-settings/notifications-settings.component';
import { PasswordSettingsComponent } from './components/password-settings/password-settings.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
	{
		path: '',
		component: SettingsComponent
	}
];

@NgModule({
	declarations: [
		NotificationsSettingsComponent,
		PasswordSettingsComponent,
		SettingsComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class SettingsModule {}
