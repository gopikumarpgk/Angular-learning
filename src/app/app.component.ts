import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navShow:boolean;

  subjectParent: any = [
    {
      'bookid': '101',
      'bookname': 'Ean? Etharku? Eppadi?',
      'author': 'Sujatha',
      'bookstatus': 'Available',
      'category': 'education'
    },
    {
      'bookid': '102',
      'bookname': 'Ponniyin Selvan',
      'author': 'Kalki',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': '103',
      'bookname': 'Kaasum Pirappum',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'novel'
    },
    {
      'bookid': '104',
      'bookname': 'Udayar',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': '105',
      'bookname': 'En Iniya Iyanthira',
      'author': 'Sujatha',
      'bookstatus': 'Not Available',
      'category': 'sci-fic'
    },]

    randomNumber : Number;

    onNumberGenerated(randomNumber : Number){
       this.randomNumber = randomNumber; 
    }
}

