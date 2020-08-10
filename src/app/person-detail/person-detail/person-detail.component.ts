import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-person-detail',
	templateUrl: './person-detail.component.html',
	styleUrls: [ './person-detail.component.css' ]
})
export class PersonDetailComponent implements OnInit {
	user: User;

	constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.loadUser();
	}

	loadUser() {
		this.userService.getUser(+this.route.snapshot.params['id']).subscribe(
			(user: User) => {
				this.user == user;
			},
			(error) => {
				this.alertify.error(error);
			}
		);
	}
}
