import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'mk-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent {
	@Input() user: User;

	date = new Date();
}
