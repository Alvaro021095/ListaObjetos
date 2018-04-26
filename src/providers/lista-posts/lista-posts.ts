import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../posts.interface';

/*
  Generated class for the ListaPostsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaPostsProvider {
	url = 'https://jsonplaceholder.typicode.com/posts';
	constructor(public http: HttpClient) {
		console.log('Hello ListaPostsProvider Provider');
	}
	getPosts() {
		return this.http.get<Post[]>(this.url);
	}
}
