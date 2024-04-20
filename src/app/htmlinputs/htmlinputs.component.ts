import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-htmlinputs',
  templateUrl: './htmlinputs.component.html',
  styleUrls: ['./htmlinputs.component.scss']
})
export class HtmlinputsComponent implements OnInit {

  constructor(private sanitize:DomSanitizer) { }
  name: string;
  age: number;
  qualification: string;
  email: any;
  search: string;
  image: any;

      

  ngOnInit(): void {
    console.log(this.name, this.age, this.qualification, this.email,)
  }

  searchh(search: string) {
    this.search = search;
    console.log(search);
  }

  submit(image: any) {
    this.image = image;
    console.log(image);

  }

  imgSrc = ''
  transform(value: string): SafeUrl {
    return this.sanitize.bypassSecurityTrustUrl(value);
  }

  imgFileSelected(event: any) {
    console.log(event);
    
    if (event.target.files && event.target.files[0]) {
      this.imgSrc = URL.createObjectURL(event.target.files[0]);
    }
  }

}
