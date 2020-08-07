import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	model: any = {};
	constructor(private _authService: AuthService, private _alertify: AlertifyService) {}

	ngOnInit(): void {}

	register() {
		this._authService.register(this.model).subscribe(
			() => {
				this._alertify.success('რეგისტაცია გავლილია');
			},
			(error) => {
				this._alertify.error(error);
			}
		);
	}

	cancel() {
		console.log('canceled');
	}
}
