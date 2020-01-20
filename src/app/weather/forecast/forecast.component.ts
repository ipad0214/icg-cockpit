import { Component, OnInit } from '@angular/core';
import weatherService from '../../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  public data: Array<any> = [];
  public dateSortedData: Array<any> = [];

  ngOnInit() {
    this.getForecastWeather();
  }

  async getForecastWeather() {
    weatherService.getForecastWeather().then(value => {
      console.log(value);
      value.data.list.forEach(element => {
        const { main } = element;
        const date: string = element.dt_txt.split(' ')[0];
        const index = this.dateSortedData.findIndex(x => x.date === date);
        if (index === -1) {
          this.dateSortedData.push({
            date,
            data: [element]
          });

          return;
        }

        this.dateSortedData[index].data.push(element);
      });
      console.log(this.dateSortedData);
    });
  }
}
