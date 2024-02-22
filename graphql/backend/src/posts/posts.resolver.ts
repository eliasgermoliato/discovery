// src/posts/posts.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => [Post])
  getPosts(): Post[] {
    return this.postsService.findAll();
  }

  @Query((returns) => Post)
  getPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Mutation((returns) => Post)
  createPost(@Args('post') post: CreatePostInput): Post {
    return this.postsService.create(post);
  }

  @Mutation((returns) => Post)
  updatePost(
    @Args('id') id: number,
    @Args('post') post: CreatePostInput,
  ): Post {
    return this.postsService.update(id, post);
  }

  @Mutation((returns) => Boolean)
  deletePost(@Args('id') id: number): boolean {
    this.postsService.delete(id);
    return true;
  }
}
