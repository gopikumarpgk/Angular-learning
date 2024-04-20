import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  

  constructor(private weatherService:WeatherService,private http:HttpClient){

  }

  getWeather(){
    const apiKey = 'b8bc90c6d421385b1499399a337bce0e';
const query = 'New York';
const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`;

this.http.get(apiUrl).subscribe((response) => {
  console.log(response); // Handle the API response here
}, (error) => {
  console.error(error); // Handle any errors that occur
});
  }
}
