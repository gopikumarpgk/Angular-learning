
import { Component, OnInit } from '@angular/core';
import { UsersDetails } from '../models/UserDetails.modal';
import { UserDetailService } from '../shared/services/user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  constructor(private userDetailService:UserDetailService){}

  ngOnInit(): void {
    this.getUserDetails();
  }
     
    allUserDetails : UsersDetails = new UsersDetails;
  getUserDetails(){
    this.userDetailService.getuserDetails().subscribe((userDetails:UsersDetails) =>{
      console.log(userDetails)
      this.allUserDetails=userDetails;
    })
  }


  
}
