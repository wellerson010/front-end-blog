import { Config } from '../config';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Post } from '../model/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    getPosts(skip:number = 0, limit:number = 0, search: string = '', category: string = ''): Promise<Post[]> {
        let urlParams = new URLSearchParams();
        urlParams.set('skip', skip.toString());
        urlParams.set('limit', limit.toString());

        if (search){
            urlParams.set('search', search);
        }

        if (category){
            urlParams.set('category', category);
        }

        let url = Config.urlApi + '/public/posts';
        return this.http.get(url, {
            search: urlParams
        }).toPromise().then(response => response.json() as Post[]);
    }

    getPostByKeyUrl(keyUrl: string):Promise<Post>{
        let url = Config.urlApi + '/public/postByKeyUrl/' + keyUrl;

        return this.http.get(url).toPromise().then(response => response.json() as Post);
    }
}