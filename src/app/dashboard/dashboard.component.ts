import { Component, OnInit } from '@angular/core';
import { faCloudSunRain, faCogs, faClock } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faCloudSunRain = faCloudSunRain;
  faCogs = faCogs;
  faClock = faClock;

  constructor() { 
  }


  ngOnInit() {
  }

}
