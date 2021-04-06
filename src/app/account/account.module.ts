import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { AccountProfileDetailsComponent } from './components/account-profile-details/account-profile-details.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
	{
		path: '',
		component: AccountComponent
	}
];

@NgModule({
	declarations: [
		AccountProfileComponent,
		AccountProfileDetailsComponent,
		AccountComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class AccountModule {}
