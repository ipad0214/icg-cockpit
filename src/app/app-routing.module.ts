import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: '', component: DashboardComponent } ,
  { path: 'timer', component: TimerComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
