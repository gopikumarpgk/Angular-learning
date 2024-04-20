import { Component } from '@angular/core';
import { multiUser, singleUser } from '../models/singleuser.model';

@Component({
  selector: 'app-singleform',
  templateUrl: './singleform.component.html',
  styleUrls: ['./singleform.component.scss']
})
export class SingleformComponent {


  firstUser: singleUser = new singleUser()
  secondUser: multiUser = new multiUser()


 
  myUsers: multiUser[] = [
    // {
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },
    // {
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },
    // {
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },{
    //   name: 'gopi',
    //   studies: 'bsc',
    //   age: 24,
    //   address: '',
    //   phno: 1234567890
    // },
  ]
addUser(){
  let user : multiUser = new multiUser();
  this.myUsers.push(user);
}
deletUser(index:number){
  this.myUsers.splice(index,1)
}

}
