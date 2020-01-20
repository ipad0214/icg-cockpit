import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.scss']
})
export class ForecastItemComponent implements OnInit {

  @Input()
  public data: any;
  public toggleDetails: false;
  public rainfall: string;
  public rainDuration: string;

  constructor() { }

  ngOnInit() {
    const { rain } = this.data;

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
  }

}
