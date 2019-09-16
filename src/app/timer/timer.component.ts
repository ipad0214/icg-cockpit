import { Component, OnInit, TemplateRef } from '@angular/core';
import restApi from './../../services/rest.interface'
import { AxiosResponse } from 'axios';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private faClock = faClock;
  private modalRef: BsModalRef;
  private days: object = {
    monday: false,
    tuesday: false,
    wensday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  };
  private startTime: Date = new Date();
  private endTime: Date = new Date(this.startTime.getMinutes() + 30);
  private rainToleranz: Date = new Date();

  constructor(private modalService: BsModalService) {
    console.log(this.days);
  }

  public timer: Array<object>

  async ngOnInit() {
    let response: AxiosResponse = await restApi.get("http://localhost:4200/api/timer");
    let { data } = response;

    this.timer = data.timers;
  }

  saveTimer() {
    let dataSet: object = {
      days: [

      ],
      startTime: 4711,
      endTime: 2230,
      whenRaining: false,
      foreCast: false
    }

    restApi.post("http://localhost:4200/api/timer", JSON.stringify(dataSet));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
