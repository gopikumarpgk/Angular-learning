import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent  {

  title = 'firstproject';
  @Input() subjectChild : any ;


  showData(click:string){
    console.log(click)
  }
}
