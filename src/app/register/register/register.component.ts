import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	model: any = {};
	constructor(private _authService: AuthService, private _alertify: AlertifyService, private _router: Router) {}

	ngOnInit(): void {}

	register() {
		this._authService.register(this.model).subscribe(
			() => {
				this._alertify.success('რეგისტაცია გავლილია');
			},
			(error) => {
				this._alertify.error(error);
			},
			() => {
				this._router.navigate([ '/list' ]);
			}
		);
	}

	cancel() {
		this._router.navigate([ '/list' ]);
	}
}
