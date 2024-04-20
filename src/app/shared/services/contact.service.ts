import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  postContact(payLoad:Contact){
    return this.http.post("https://krishnaaugustinepersonalsite-default-rtdb.firebaseio.com/contact.json",
     payLoad)                        
  }
  

  
}






