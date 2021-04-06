import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'mk-password-settings',
	templateUrl: './password-settings.component.html',
	styleUrls: ['./password-settings.component.scss']
})
export class PasswordSettingsComponent implements OnInit {
	formGroup: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formGroup = this.fb.group({
			password: [''],
			confirm: ['']
		});
	}
}
