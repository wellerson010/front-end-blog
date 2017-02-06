import {Component, OnInit, AfterViewInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Post} from '../../model/post';
import {LoadingControlService} from '../../services/loading-control.service';


@Component({
    templateUrl: 'post.component.html',
    styleUrls: ['post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit{
    post:Post;

    constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private loadingControl: LoadingControlService){}

    ngAfterViewInit(){

    }

    ngOnInit(){
        this.activatedRoute.params.subscribe((params: Params) => {
            this.httpService.getPostByKeyUrl(params['url']).then(post => {
                this.post = post;
                this.loadingControl.loading.next(false);
            });
        });
    }
}