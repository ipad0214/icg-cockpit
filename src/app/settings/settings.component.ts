import { Component, OnInit } from '@angular/core';
import restApi from './../../services/rest.interface'
import { AxiosResponse } from 'axios';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  public interval: number;
  public sensivity: number;
  public location: string;

  async ngOnInit() {
    let resp: AxiosResponse = await restApi.get("http://localhost:4200/api/settings");
    let { data } = resp;
    console.log(data);
    this.interval = data.interval;
    this.sensivity = data.sensivity;
    this.location = data.location;
  }

}
