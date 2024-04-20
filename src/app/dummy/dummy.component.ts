import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SmartDetails, SmartPhone } from '../models/smmartphone.model';
import { DummyService } from '../shared/services/dummy.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  constructor(private dummyservice: DummyService) { }

  ngOnInit(): void {
    this.getdata();
  }

  smartPhoneDetails: SmartDetails = new SmartDetails;
  getdata() {
    this.dummyservice.getSmartProducts().subscribe((data: SmartDetails) => {
      console.log(data)
      this.smartPhoneDetails = data;
    })
  }

  putPhoneDetails(smartPhone:SmartPhone){
    smartPhone.title=smartPhone.title+"(updated)";
    this.dummyservice.putSmartPhonePrice(smartPhone).subscribe(data =>{
      console.log(data,'updates SmartPhone'); 
    })
  }

}
