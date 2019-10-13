import { Component, OnInit, TemplateRef } from '@angular/core';
import restApi from './../../services/rest.interface'
import { AxiosResponse } from 'axios';
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  private timers: JSON;
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
  public timer: Array<object>;
  private duration = 0;
  public name: string;
  private rainToleranz: Date = new Date();
  private loading = true;

  constructor(private modalService: BsModalService) {
    console.log(this.days);
  }

  async ngOnInit() {
    restApi.get('http://localhost:4200/api/timer').then(value => {
      const { data } = value;
      this.timers = data;
      console.log(this.timers);
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }

  saveTimer() {
    const dataSet: object = {
      startTime: this.startTime,
      duration: this.duration,
      name: this.name
    };

    restApi.post('http://localhost:4200/api/timer', JSON.stringify(dataSet)).then(value => {
      this.timers = value;
      this.modalRef.hide();
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
