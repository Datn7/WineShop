import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';

import { Post } from '../post.model';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: [ './post-list.component.css' ]
})
export class PostListComponent implements OnInit {
	posts: any;

	constructor(private postService: PostsService, private _Http: HttpClient) {}

	ngOnInit(): void {
		/*this.posts = this.postService.getPosts();
		this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
			this.posts = posts;
		}); */

		this.getPostsByHttp();
	}

	deletePostByHttp(postId: string) {
		this.postService.deletePostByHttp(postId);
	}

	//getPostByHttp() {
	//this.postService.getPostsByHttp();
	//}

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
}
