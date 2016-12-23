import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import {DatePipe} from './pipe/date.pipe';

import {components, routes} from './routes';
import {HttpService} from './services/http.service';
import {MainComponent} from './components/main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    DatePipe,
    ...components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    InfiniteScrollModule
  ],
  providers: [HttpService],
  bootstrap: [MainComponent]
})
export class AppModule { }
