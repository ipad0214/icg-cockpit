import { Component, OnInit } from '@angular/core';
import weatherService from '../../../services/weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  constructor() { }

  public temperature: number;
  public min: number;
  public max: number;
  public icon: string;
  public pressure: number;
  public humidity: number;
  public showDetails = false;
  public windDeg: number;
  public windSpeed: number;
  public rainfall: number;
  public rainDuration: string;
  public city: string;
  public country: string;

  ngOnInit() {
    this.getCurrentWeather();
  }

  async getCurrentWeather() {
    weatherService.getCurrentWeather().then(value => {
      console.log(value);
      const { data } = value;
      const { main, wind, weather, rain, sys } = data;

      this.temperature = main.temp;
      this.min = main.temp_min;
      this.max = main.temp_max;
      this.icon = data.weather[0].iconSrc;
      this.humidity = main.humidity;
      this.pressure = main.pressure;
      this.windDeg = wind.deg;
      this.windSpeed = wind.speed;
      this.country = sys.country;
      this.city = data.name;

      if (rain !== undefined) {
        const { h1, h3 } = rain;
        if (h1 !== undefined) {
          this.rainfall = h1;
          this.rainDuration = 'h1';
          return;
        }

        if (h3 !== undefined) {
          this.rainfall = h3;
          this.rainDuration = 'h3';
          return;
        }
      }
    });
  }

}
