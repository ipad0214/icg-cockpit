import { Component, OnInit } from '@angular/core';
import service from './../../services/rest.interface'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() {
    console.log(service);
  }

  ngOnInit() {
  }

  saveTimer() {
    
  }
}
