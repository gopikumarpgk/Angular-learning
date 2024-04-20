import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SmartPhone } from 'src/app/models/smmartphone.model';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }


  getSmartProducts(): Observable<any> {
    return this.http.get("https://dummyjson.com/products")
  }

  putSmartPhonePrice(smartPhone:SmartPhone): Observable<any> {
    return this.http.put("https://dummyjson.com/products/"+smartPhone.id,smartPhone)
  }

  
  getPictures(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos")
  }

  updatePicture(PayLoad:any){
    return this.http.put("https://jsonplaceholder.typicode.com/photos/"+PayLoad.id,PayLoad)
  }
}



