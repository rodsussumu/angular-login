import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsTopicsComponent } from './posts-topics/posts-topics.component';
import { PostsTopicsService } from '../services/posts-topics.service';
import { PostsTopicDetailComponent } from './posts-topic-detail/posts-topic-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsTopicsComponent,
    PostsTopicDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers : [
    PostsTopicsService
  ]
})
export class PostsModule { }
