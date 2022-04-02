import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { StackbarChartComponent } from './stackbar-chart/stackbar-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    StackbarChartComponent,
    AreaChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    FormsModule, 
    MatTabsModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
