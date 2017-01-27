import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Post } from '../../model/post';

@Component({
    templateUrl: 'list-post.component.html',
    styleUrls: ['list-post.component.css']
})
export class ListPostComponent implements OnInit {
    posts: Array<Post>;
    isLoadingMorePost = false;

    constructor(private httpService: HttpService) { }

    buildBackgroundImageFromPost(post: Post) {
        if (post.img_url) {
            return 'url(' + post.img_url + ')';
        }
        return '';
    }

    ngOnInit(): void {
        this.httpService.getPosts(0, 12).then(data => {
            this.posts = data;
            console.log(this.posts);
        })
    }

    resizeWindow(event: UIEvent) {
    }

    scrollInfinite() {
        if (!this.isLoadingMorePost && this.posts) {
            this.isLoadingMorePost = true;
            this.httpService.getPosts(this.posts.length, 6).then(data => {
                this.isLoadingMorePost = false;
                this.posts.splice(this.posts.length, 0, ...data);
            })
        }
    }

}