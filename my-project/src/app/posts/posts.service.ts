import { Injectable } from '@angular/core';

import { Post } from './post.model'

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post)
  }
}
