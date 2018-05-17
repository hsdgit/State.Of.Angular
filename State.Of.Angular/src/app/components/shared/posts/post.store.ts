import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { Post } from '../models/Post';
import { FetchPosts } from './post.actions';

export interface PostStateModel {
  posts: Post[];
  loading: boolean;
}

@State<PostStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    loading: true
  }
})
export class PostState {
  /**
   *
   */
  constructor(private http: HttpClient) { }

  @Selector()
  public static loading(state: PostStateModel) {
    return state.loading;
  }

  @Selector()
  public static posts(state: PostStateModel) {
    return state.posts;
  }

  @Action(FetchPosts)
  getPosts({ getState, setState }: StateContext<PostStateModel>) {
    const state = getState();
    let posts: Post[] = [];
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(post => {
      posts = post;

      console.log(posts[0].id);

      setState({
        ...state,
        posts: posts,
        loading: false
      });
    });
  }

}
