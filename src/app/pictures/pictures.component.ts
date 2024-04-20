import { Component, OnInit } from '@angular/core';
import { pictures } from '../models/pic .model';
import { DummyService } from '../shared/services/dummy.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit{


  constructor( private DummyService:DummyService  ) {
  }


  

  ngOnInit(): void {
    this.getPictures();
  }
  allPictures : any;
  getPictures(){
    this.DummyService.getPictures().subscribe(data =>{
      console.log(data)
    this.allPictures = data;
    })
  }  
  obj={
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
}

data:any;
// data:string=this.obj.title;
putPicture(){
  // this.obj.title=this.data
  this.DummyService.updatePicture(this.obj).subscribe(responseData =>{
    console.log(responseData)
    this.data=responseData;
  })
}
}



