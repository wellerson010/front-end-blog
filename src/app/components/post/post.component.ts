import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Post} from '../../model/post';

@Component({
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit{
    post:Post;

    constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.activatedRoute.params.subscribe((params: Params) => {
            this.httpService.getPostByKeyUrl(params['url']).then(post => {
                this.post = post;
            });
        });
    }
}