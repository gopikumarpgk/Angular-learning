import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { BoxingComponent } from './boxing/boxing.component';
import { ContectComponent } from './contect/contact.component';
import { DummyComponent } from './dummy/dummy.component';
import { ExampleComponent } from './example/example.component';
import { HomeComponent } from './home/home.component';
import { HtmlinputsComponent } from './htmlinputs/htmlinputs.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SingleformComponent } from './singleform/singleform.component';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { WebsiteComponent } from './website/website.component';
import { WeatherComponent } from './weather/weather.component';
import { BoreComponent } from './bore/bore.component';




const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'contect', component: ContectComponent },
  { path: 'boxing', component: BoxingComponent },
  { path:'profilecard',component: ProfilecardComponent },
  { path: 'singleform',component: SingleformComponent },
  { path: 'reactiveform',component: ReactiveformComponent },
  { path: 'example',component: ExampleComponent },
  { path: 'htmlinputs',component: HtmlinputsComponent },
  { path: 'dummy',component: DummyComponent},
  { path: 'userDetails',component: UserDetailsComponent},
  { path: 'pictures',component: PicturesComponent},
  { path: 'test',component: TestComponent},
  { path: 'loginCard',component: LoginCardComponent},
  { path: 'website',component:WebsiteComponent},
  { path: 'weather',component:WeatherComponent},
  { path: 'bore',component:BoreComponent},





  
    {path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {path : 'forms',
loadChildren: ()=> import('./forms-module/forms-module.module').then(m=>m.FormsModuleModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
