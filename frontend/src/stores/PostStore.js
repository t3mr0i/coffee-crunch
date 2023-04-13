import { makeAutoObservable } from 'mobx';

class PostStore {
  posts = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }

  // Add more actions and computed values as needed
}

export default PostStore;
