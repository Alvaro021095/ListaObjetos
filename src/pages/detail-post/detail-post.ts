import { Post } from './../../posts.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detail-post',
	templateUrl: 'detail-post.html'
})
export class DetailPostPage {
	detail: Post;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.detail = navParams.get('currentItem');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailPostPage');
	}
}
