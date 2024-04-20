import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { StoryComponent } from './story/story.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path:'',component: VideoComponent },
  { path:'story',component: StoryComponent },
  { path:'puzzle',component: PuzzleComponent },
  { path:'video',component: VideoComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
               
}


