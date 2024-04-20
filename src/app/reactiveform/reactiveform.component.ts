
import { Input ,Output ,EventEmitter, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import CheckingService from '../services/checking.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit{

@Input() subjectChild :any[];
@Output()  numberGenerated1  = new EventEmitter<number>();
 

 myForm:FormGroup;
  
 

  ngOnInit(): void {

    this.myForm=new FormGroup({
       
      'id' : new FormControl(this.subjectChild[0].bookid,[Validators.required,Validators.max(10)]),
      'name' : new FormControl(this.subjectChild[0].bookname,[Validators.required,Validators.maxLength(20)]),
      'author' : new FormControl(this.subjectChild[0].author,[Validators.required,Validators.maxLength(20)]),
      'category' : new FormControl(this.subjectChild[0].category),
    
    })
    
    console.log(this.myForm.value,this.myForm.status)
  }

  constructor(public _number : CheckingService){

  }
  
  submit(){
    console.log(this.myForm.value,this.myForm.status)
    console.log(this.subjectChild[1].bookid,  );
    
  }

  public generateNumber(){
    const randomNumber =Math.random();
    this.numberGenerated1.emit(randomNumber);
  }
   
  number(){
    this._number.addOne() 
  }

}

