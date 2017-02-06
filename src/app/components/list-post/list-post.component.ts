import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Post } from '../../model/post';
import { LoadingControlService } from '../../services/loading-control.service';


@Component({
    templateUrl: 'list-post.component.html',
    styleUrls: ['list-post.component.css']
})
export class ListPostComponent implements OnInit {
    allPostsLoaded = false;
    isLoadingMorePost = false;
    initialPostsToLoad = 12;
    posts: Array<Post>;
    postsToLoadByScroll = 6;
    searchParam = '';


    constructor(private httpService: HttpService,
        private loadingControl: LoadingControlService,
        private activatedRoute: ActivatedRoute) { }

    buildBackgroundImageFromPost(post: Post) {
        if (post.img_url) {
            return 'url(' + post.img_url + ')';
        }
        return '';
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
            this.searchParam = queryParams['search'];
            this.httpService.getPosts(0, this.initialPostsToLoad, this.searchParam).then(data => {

                this.allPostsLoaded = false
                this.allPostsLoaded = (data.length < this.initialPostsToLoad);

                this.posts = data;
                this.loadingControl.loading.next(false);
            });
        });
    }

    resizeWindow(event: UIEvent) {

    }

    scrollInfinite() {
        if (!this.allPostsLoaded && !this.isLoadingMorePost && this.posts) {
            this.isLoadingMorePost = true;
            this.httpService.getPosts(this.posts.length, this.postsToLoadByScroll).then(data => {
                this.allPostsLoaded = (data.length < this.postsToLoadByScroll);

                this.isLoadingMorePost = false;
                this.posts.splice(this.posts.length, 0, ...data);
            })
        }
    }

}