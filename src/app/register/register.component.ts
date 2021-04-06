import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'mk-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	formGroup: FormGroup;

	isSubmitting = false;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private title: Title
	) {}

	ngOnInit(): void {
		this.title.setTitle('Register | Material Kit');

		this.formGroup = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			password: ['', Validators.required],
			policy: ['', Validators.requiredTrue]
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
