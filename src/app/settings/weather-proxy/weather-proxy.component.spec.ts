import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherProxyComponent } from './weather-proxy.component';

describe('WeatherProxyComponent', () => {
  let component: WeatherProxyComponent;
  let fixture: ComponentFixture<WeatherProxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherProxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
