import { Injectable } from '@angular/core';
import { Gopi } from '../models/gopi.model';

type NewType = Gopi;

@Injectable({
  providedIn: 'root'
})
export default class CheckingService {

  counter : number =100;

  constructor() { }
  user : Gopi = new Gopi() 


  addOne(){
    this.counter++;
    this.user = this. dummyData,
    console.log(this.user)

  }
   dummyData : Gopi={
    name : 'raji',
    age : 55,
    dob : new Date(),
    address : 'mental hospital',
    
   }
  

  // arrayofobject:any[]=[
  //   {
  //     name:'name'
  //   },
  //   {
  //     name:'name'
  //   },
  //   {
  //     name:'name'
  //   },
  //   {
  //     name:'name'
  //   }
  // ]



  // arrayofString:string[]=["name","asdfg","asdfg","asdfgh","asdfg"]

  // arrayofNumber:number[]=[12,23,24,23]

  
  arrayofgopi:NewType[]=[ 
   
  ]

  
}
