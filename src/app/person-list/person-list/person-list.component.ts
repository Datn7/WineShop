import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
	selector: 'app-person-list',
	templateUrl: './person-list.component.html',
	styleUrls: [ './person-list.component.css' ]
})
export class PersonListComponent implements OnInit {
	users: User[];

	constructor(private userService: UserService, private alertify: AlertifyService) {}

	ngOnInit(): void {
		this.loadUsers();
	}

	loadUsers() {
		this.userService.getUsers().subscribe(
			(users: User[]) => {
				this.users = users;
			},
			(error) => {
				this.alertify.error(error);
			}
		);
	}
}
