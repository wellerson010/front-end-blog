import {ListPostComponent} from './components/list-post/list-post.component';
import {PostComponent} from './components/post/post.component';

export const routes = [{
    path: 'list',
    component:ListPostComponent,
}, {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
},
{
    path: 'blog/:url',
    component: PostComponent
}
];

export const components = [ListPostComponent, PostComponent];