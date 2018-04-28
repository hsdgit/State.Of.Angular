import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';

import { AppRouting } from './app.routing';
import { AppComponent } from './components/app/app.component';
import { HomeModule } from './components/home/home.module';
import { NotfoundModule } from './components/notfound/notfound.module';
import { PostsRouting } from './components/posts/post.routing';
import { PostsModule } from './components/posts/posts.module';
import { HomeState } from './components/shared/home/home.store';
import { PostState } from './components/shared/posts/post.store';

// https://github.com/ngxs/store
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgxsModule.forRoot([HomeState, PostState]),
    AppRouting,
    HomeModule,
    NotfoundModule,
    PostsRouting,
    PostsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
