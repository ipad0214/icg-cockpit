import { Component, OnInit } from '@angular/core';
import restApi from './../../services/rest.interface'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  public temp: number;

  async ngOnInit() {
    let response  = await restApi.get('http://localhost:4200/api/weather');
    let { data } = response;
    this.temp = data.temprature;
  }
}
