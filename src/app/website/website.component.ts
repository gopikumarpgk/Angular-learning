import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent {

  Email:string;
  password:any;
  constructor( private router:Router){}

  login(){
  this.router.navigateByUrl("/home");
  }
  signup(){
    this.router.navigateByUrl("/loginCard"); 
  }
}
