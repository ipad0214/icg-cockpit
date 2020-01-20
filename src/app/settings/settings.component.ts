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

  }
}
