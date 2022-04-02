import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stackbar-chart',
  templateUrl: './stackbar-chart.component.html',
  styleUrls: ['./stackbar-chart.component.css']
})
export class StackbarChartComponent implements OnInit {

  constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS. 
    barChartOptions: ChartOptions = {
        responsive: true
    }
    
    barChartLabels: Label[] =  ['ClassA', 'ClassB', 'ClassC', 'ClassD', 'ClassE'];
    barChartType: ChartType = 'bar';
    barChartLegend = true;
    barChartPlugins = [];

    // barChartColor:any = [
    //     {
    //       backgroundColor: ['rgba(30, 169, 224, 0.8)',
    //       'rgba(255,165,0,0.9)',
    //       'rgba(139, 136, 136, 0.9)',
    //       'rgba(255, 161, 181, 0.9)',
    //       'rgba(255, 102, 0, 0.9)'
    //       ]
    //     }
    // ]

    barChartData:any = [
        { 
            data: [[],[]],
        }
    ];
  
    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
            data => {
                this.barChartData = data;	 // FILL THE CHART ARRAY WITH DATA.
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

    onChartClick(event:any) {
        console.log(event);
    }

}
