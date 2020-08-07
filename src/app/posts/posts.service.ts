import { Injectable } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Subject } from 'rxjs';

import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PostsService {
	private posts: any;
	private postsUpdated = new Subject<Post[]>();

	constructor(private _Http: HttpClient) {}

	getPosts() {
		return [ ...this.posts ];
	}

	getPostsByHttp() {
		this._Http.get('http://localhost:5000/api/myclasses').subscribe(
			(res) => {
				this.posts = res;
			},
			(error) => {
				console.log('რაცხა ვერაა საქმე');
			}
		);
	}

	deletePostByHttp(postId: string) {
		this._Http.delete('http://localhost:5000/api/myclasses/' + postId).subscribe(() => {
			console.log('წაიშალა');
		});
	}

	getPostUpdateListener() {
		return this.postsUpdated.asObservable();
	}

	addPost(title: string) {
		const post: Post = { title: title };
		this.posts.push(post);
		this.postsUpdated.next([ ...this.posts ]);
	}
}
