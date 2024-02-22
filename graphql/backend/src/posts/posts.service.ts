import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = []; // Temporary storage

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    return this.posts.find((post) => post.id === id);
  }

  create(post: Post): Post {
    this.posts.push(post);
    return post;
  }

  update(id: number, post: Post): Post {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index > -1) {
      this.posts[index] = post;
    }
    return post;
  }

  delete(id: number): void {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index > -1) {
      this.posts.splice(index, 1);
    }
  }
}
