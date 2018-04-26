import { Post } from './../../posts.interface';
import { DetailPostPage } from './../detail-post/detail-post';
import { ListaPostsProvider } from './../../providers/lista-posts/lista-posts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	posts$: Observable<Post[]>;
	constructor(public navCtrl: NavController, public lista: ListaPostsProvider) {
		this.posts$ = this.lista.getPosts();
	}
	goToPageDetailPost(post: Post): void {
		this.navCtrl.push('DetailPostPage', { currentItem: post });
	}
}
