import { Component, OnInit } from '@angular/core';
import restApi from './../../../services/rest.interface';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-weather-proxy',
  templateUrl: './weather-proxy.component.html',
  styleUrls: ['./weather-proxy.component.scss']
})
export class WeatherProxyComponent implements OnInit {
  public apiKey = '';
  public pollingDuration = 0;
  public countryCode = '';
  public zipCode = '';
  public persistedApiKey = false;
  constructor() { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    restApi.get('http://localhost:4200/weatherproxy/config').then(value => {
      console.log(value);
      const { data }: any = value;
      if (data.apiKey !== undefined && data.apiKey !== '') {
        this.persistedApiKey = true;
        this.apiKey = data.apiKey;
      }
      this.zipCode = data.zipCode;
      this.countryCode = data.countryCode;
      this.pollingDuration = data.pollingDuration;
    });
  }

  public save() {
    const data = {
      apiKey: this.apiKey,
      pollingDuration: this.pollingDuration,
      zipCode: this.zipCode,
      countryCode: this.countryCode
    };
    restApi.post('http://localhost:4200/weatherproxy/config', JSON.stringify(data)).then(value => {
      const resp: any = value;
      if (data.apiKey !== undefined && data.apiKey !== '') {
        this.persistedApiKey = true;
        this.apiKey = data.apiKey;
      } else {
        this.persistedApiKey = false;
      }
      this.zipCode = resp.zipCode;
      this.countryCode = resp.countryCode;
      this.pollingDuration = resp.pollingDuration;
    });
  }
}
