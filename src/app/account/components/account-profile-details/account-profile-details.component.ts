import { Component,Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'mk-account-profile-details',
  templateUrl: './account-profile-details.component.html',
  styleUrls: ['./account-profile-details.component.scss']
})
export class AccountProfileDetailsComponent implements OnInit {
	@Input() user: User;

	date = new Date();

	formGroup: FormGroup;

	isSubmitting = false;

	states = [
		{
			value: 'alabama',
			label: 'Alabama'
		},
		{
			value: 'new-york',
			label: 'New York'
		},
		{
			value: 'san-francisco',
			label: 'San Francisco'
		}
	];

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formGroup = this.fb.group({
			country: [this.user.country],
			email: [this.user.email],
			firstName: [this.user.firstName],
			lastName: [this.user.lastName],
			phone: [this.user.phone],
			state: [this.user.state]
		});
	}

	onSubmit(): void {}
}
