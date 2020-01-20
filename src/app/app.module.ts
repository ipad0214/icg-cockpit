import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BaseComponent } from './base/base.component';
import { TimerComponent } from './timer/timer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './controls/card/card.component';
import { WeatherComponent } from './weather/weather.component';
import { SettingsComponent } from './settings/settings.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlsComponent } from './timer/controls/controls.component';
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { WeatherProxyComponent } from './settings/weather-proxy/weather-proxy.component';
import { ForecastComponent } from './weather/forecast/forecast.component';
import { CurrentComponent } from './weather/current/current.component';
import { ForecastItemComponent } from './weather/forecast/forecast-item/forecast-item.component';
import { ChartsModule } from 'ng2-charts';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaseComponent,
    TimerComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent,
    WeatherComponent,
    SettingsComponent,
    ControlsComponent,
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatCardTitle,
    WeatherProxyComponent,
    ForecastComponent,
    CurrentComponent,
    ForecastItemComponent,
    TemperatureChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    ChartsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
