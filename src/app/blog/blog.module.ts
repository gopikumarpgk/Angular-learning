import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { StoryComponent } from './story/story.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    StoryComponent,
    PuzzleComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
