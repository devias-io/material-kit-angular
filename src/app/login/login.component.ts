import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'mk-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	formGroup: FormGroup;

	isSubmitting = false;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private title: Title
	) {}

	ngOnInit(): void {
		this.title.setTitle('Login | Material Kit');

		this.formGroup = this.fb.group({
			email: ['demo@devias.io', [Validators.required, Validators.email]],
			password: ['Password123!', Validators.required]
		});
	}

	onSubmit(): void {
		if (this.formGroup.invalid) {
			return;
		}

		this.isSubmitting = true;
		// Do API call
		this.isSubmitting = false;
		this.router.navigateByUrl('/app/dashboard')
			.catch(console.error);
	}
}
