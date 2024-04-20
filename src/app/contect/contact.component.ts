import { Component, Input, OnInit } from '@angular/core';
import { multiUser } from '../models/singleuser.model';
import { Contact } from '../models/contact.model';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contect',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContectComponent implements OnInit {

  userContact: Contact = new Contact();



  @Input() oneUser: multiUser = new multiUser();
  constructor(private ContactService: ContactService) { }

  ngOnInit(): void {
  }

  submit() {

    console.log(this.userContact)
    // this.ContactService.postContact(this.userContact).subscribe(
    //   data => {
    //     console.log(data)
    //   })

  }
}



