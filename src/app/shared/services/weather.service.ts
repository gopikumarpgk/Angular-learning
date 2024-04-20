import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient) { }
  weatherCall():Observable<any>{
    let access_key = 'b8bc90c6d421385b1499399a337bce0e';
    return this.http.get('http://api.weatherstack.com/current?access_key')
  }
}
