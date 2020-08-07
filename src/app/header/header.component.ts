import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	model: any = {};
	constructor(public _authService: AuthService, private _alertify: AlertifyService) {}

	ngOnInit(): void {}

	login() {
		this._authService.login(this.model).subscribe(
			(next) => {
				this._alertify.success('შეაჯვი როგორც იქნა');
			},
			(error) => {
				this._alertify.error('შემი ყლე ჭამე, ვერ შეხვედი');
			}
		);
	}

	loggedIn() {
		return this._authService.loggedIn();
	}

	logout() {
		localStorage.removeItem('token');
		this._alertify.message('გახვედი');
	}
}
