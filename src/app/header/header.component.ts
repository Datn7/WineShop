import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
	model: any = {};
	constructor(private _authService: AuthService) {}

	ngOnInit(): void {}

	login() {
		this._authService.login(this.model).subscribe(
			(next) => {
				console.log('შეაჯვი როგორც იქნა');
			},
			(error) => {
				console.log('შემი ყლე ჭამე, ვერ შეხვედი');
			}
		);
	}

	loggedIn() {
		const token = localStorage.getItem('token');
		return !!token;
	}

	logout() {
		localStorage.removeItem('token');
		console.log('გახვედი');
	}
}
