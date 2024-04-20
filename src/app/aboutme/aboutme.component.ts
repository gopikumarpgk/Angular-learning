import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log(this.car)
    console.log(this.books)
  }
  books:any = [
    {
      'bookid': 101,
      'bookname': 'Ean? Etharku? Eppadi?',
      'author': 'Suji',
      'bookstatus': 'Available',
      'category': 'education'
    },
    {
      'bookid': 102,
      'bookname': 'Ponniyin Selvan',
      'author': 'Kalki',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 103,
      'bookname': 'Kaasum Pirappum',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'novel'
    },
    {
      'bookid': 104,
      'bookname': 'Udayar',
      'author': 'Balakumaran',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 105,
      'bookname': 'En Iniya Iyanthira',
      'author': 'Sujatha',
      'bookstatus': 'Not Available',
      'category': 'sci-fic'
    },
    {
      'bookid': 106,
      'bookname': 'Thirukkural',
      'author': 'Thiruvalluvar',
      'bookstatus': 'Available',
      'category': 'education'
    },
    {
      'bookid': 107,
      'bookname': 'Vandhargal Vendrargal',
      'author': 'Madhan',
      'bookstatus': 'Available',
      'category': 'history'
    },
    {
      'bookid': 108,
      'bookname': 'Maths Puzzle',
      'author': 'Shakuntala Devi',
      'bookstatus': 'Not Available',
      'category': 'education'

    },
    {
      'bookid': 109,
      'bookname': 'Sorgha Theevu',
      'author': 'Sujatha',
      'bookstatus': 'Not Printing',
      'category': 'sci-fic'
    }
  ]



  car = {
    'wheel': 4,
    'name': 'audi',
    'obj': {
      'owners': [
        {
          'name': 'raji',
          'age':25
        },
        {
          'name': 'gopi',
          'age':23
  
        },
        {
          'name': 'krishna',
          'age':22
  
        }
      ]
    }
  }
  gopi(data:any){
    console.log(data)
  }
}
