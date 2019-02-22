import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './dashboard/map/map.component';
import { DataComponent } from './dashboard/data/data.component';
import { MeterComponent } from './dashboard/meter/meter.component';
import { ReportsComponent } from './dashboard/reports/reports.component';


import {
  MatGridListModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent,
    DataComponent,
    MeterComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
