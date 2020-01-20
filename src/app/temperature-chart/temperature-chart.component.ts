import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import weatherService from '../../services/weather.service';


@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.scss']
})
export class TemperatureChartComponent implements OnInit {

  public multi: any[] = [];
  public view: any[] = [1200, 600];

  // options
  public legend: boolean = true;
  public showLabels: boolean = true;
  public animations: boolean = true;
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public showYAxisLabel: boolean = true;
  public showXAxisLabel: boolean = false;
  public xAxisLabel: string = 'Time';
  public yAxisLabel: string = 'Temperature °C';
  public timeline: boolean = true;

  public selectedValue: string = "";

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB']
  };

  constructor() {

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    weatherService.getForecastWeather().then(value => {
      this.createData(value);
    });
  }

  private createData(value: any) {
    let min: any[] = [], max: any[] = [], cur: any[] = [], multi: any[] = [];
    let today = new Date();

    value.data.list.forEach(element => {
      const { main } = element;
      let elemDate = new Date(element.dt * 1000);
      let displayDate = `${elemDate.getDate()}.${elemDate.getMonth() + 1}.${elemDate.getFullYear()} ${elemDate.getHours()}:00`;
      if(this.selectedValue === "today") {
        if (today.getDate() === elemDate.getDate() && today.getMonth() === elemDate.getMonth() && today.getFullYear() === elemDate.getFullYear()) {
          min.push({"value": main.temp_min, "name": displayDate});
          max.push({"value": main.temp_max, "name": displayDate});
          cur.push({"value": main.temp, "name": displayDate});
        }
      } else {
        min.push({"value": main.temp_min, "name": displayDate});
        max.push({"value": main.temp_max, "name": displayDate});
        cur.push({"value": main.temp, "name": displayDate});
      }

      this.createDataSet("min", min, multi);
      this.createDataSet("max", max, multi);
      this.createDataSet("current", cur, multi);

      this.multi = multi;
    });

  }

  private reRender() {
    weatherService.getForecastWeather().then(value => {
      this.createData(value);
    });
  }

  private createDataSet(name: string, series: any[], result: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      result.push({
          "name": name,
          "series": series
        });

      resolve(true);
    });
  }
}

