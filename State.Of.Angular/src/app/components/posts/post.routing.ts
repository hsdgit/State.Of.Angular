import { RouterModule, Routes } from '@angular/router';
import { ViewPostsComponent } from './view-posts/view-posts.component';

const postsRoutes: Routes = [
  {
    path: 'posts',
    children: [
      { path: '', component: ViewPostsComponent }
    ]
  }
];

export const PostsRouting = RouterModule.forChild(postsRoutes);
