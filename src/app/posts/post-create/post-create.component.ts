import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: [ './post-create.component.css' ]
})
export class PostCreateComponent implements OnInit {
	constructor(public postService: PostsService) {}


	ngOnInit(): void {}

	onAddPost(form: NgForm) {
		if (form.invalid) {
			return;
		}

		this.postService.addPost(form.value.title);
	}
}
