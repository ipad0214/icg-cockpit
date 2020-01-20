import { Component, OnInit } from '@angular/core';

import { async } from '@angular/core/testing';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }

  public temp: number;

  async ngOnInit() {

  }
}
