import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	model: any = {};
	constructor(private _authService: AuthService) {}

	ngOnInit(): void {}

	register() {
		this._authService.register(this.model).subscribe(
			() => {
				console.log('რეგისტაცია გავლილია');
			},
			(error) => {
				console.log(error);
			}
		);
	}

	cancel() {
		console.log('canceled');
	}
}
