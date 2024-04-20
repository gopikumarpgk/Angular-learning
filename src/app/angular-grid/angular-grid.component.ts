import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailService } from '../shared/services/user-detail.service';

@Component({
  selector: 'app-angular-grid',
  templateUrl: './angular-grid.component.html',
  styleUrls: ['./angular-grid.component.scss']
})
export class AngularGridComponent {

  userList :MatTableDataSource<any>= new MatTableDataSource()
  headerList: string[] = []
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userDetailService:UserDetailService){}

  ngOnInit(): void {
    this.getUsers()
  }

  ngAfterViewInit() {
    this.userList.paginator = this.paginator;
    // this.userList.sort = this.sort;
  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  getUsers() {
    this.userDetailService.getuserDetails().subscribe((res: any) => {
      console.log(res)
      this.userList.data = res.users      
      this.headerList = Object.keys(this.userList.data[0])
      console.log(res, 'responce');
      // this.userList.sort=this.sort
    })
  }
}
