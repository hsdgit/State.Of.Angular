import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsRouting } from './post.routing';
import { ViewPostsComponent } from './view-posts/view-posts.component';

@NgModule({
  imports: [
    CommonModule,
    PostsRouting
  ],
  declarations: [ViewPostsComponent]
})
export class PostsModule { }
