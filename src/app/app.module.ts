import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ProfilecardComponent } from './profilecard/profilecard.component';
import { BoxingComponent } from './boxing/boxing.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContectComponent } from './contect/contact.component';
import { HtmlinputsComponent } from './htmlinputs/htmlinputs.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { SingleformComponent } from './singleform/singleform.component';
import { SharedModule } from './shared/shared.module';
import { DummyComponent } from './dummy/dummy.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PicturesComponent } from './pictures/pictures.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './shared/material/material.module';
import { AngularGridComponent } from './angular-grid/angular-grid.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { WebsiteComponent } from './website/website.component';
import { WeatherComponent } from './weather/weather.component';
import { BoreComponent } from './bore/bore.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ProfilecardComponent,
    BoxingComponent,
    HomeComponent,
    AboutmeComponent,
    ContectComponent,
    HtmlinputsComponent,
    ReactiveformComponent,
    SingleformComponent,
    DummyComponent,
    UserDetailsComponent,
    PicturesComponent,
    TestComponent,
    AngularGridComponent,
    LoginCardComponent,
    WebsiteComponent,
    WeatherComponent,
    BoreComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
