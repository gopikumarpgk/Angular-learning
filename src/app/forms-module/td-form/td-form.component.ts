import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent {


  onsubmit(testForm:NgForm){
    
    console.log(testForm.value);
    console.log("submitted");
    testForm.reset();
    
    
    
  }

}
