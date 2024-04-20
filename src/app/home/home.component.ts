import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
modal: any;
navShow:boolean=true;

  constructor() { }

  ngOnInit(): void {

    function calculateSum(n: any) {
      let sum = 0;
      for (let i = n; i >= 1; i--) {
        sum += i;
      }
      return sum;
    }
    
    // Example usage:
    const inputNumber = 50;
    const result = calculateSum(inputNumber);
    console.log("The sum is:", result);
  }

}

