import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit{


testForm: FormGroup;
formValue:any[]

ngOnInit() {
  this.testForm=new FormGroup({
    'name': new FormControl(),
  })
  console.log(this.testForm)
}

valuePass(){
  console.log(this.testForm.value);
  this.formValue=this.testForm.value
}



}
