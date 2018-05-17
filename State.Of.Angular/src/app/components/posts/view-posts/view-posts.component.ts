import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';

import { Post } from '../../shared/models/Post';
import { FetchPosts } from '../../shared/posts/post.actions';
import { PostState } from '../../shared/posts/post.store';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  constructor(private store: Store, private route: ActivatedRoute) { }

  @Select(PostState.loading) loading$: Observable<boolean>;
  @Select(PostState.posts) posts$: Observable<Post[]>;

  ngOnInit() {
    this.store.dispatch(new FetchPosts());
  }

}
