import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  icon: FontawesomeObject

  @Input()
  routeName: string;

  @Input()
  route: string;

  ngOnInit() {
    
  }

  navigate() {
    this.router.navigateByUrl(`/${this.route}`);
  }

}
