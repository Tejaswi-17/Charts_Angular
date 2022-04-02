import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

    constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS. 
    areaChartOptions: ChartOptions = {
        responsive: true
    }
    
    areaChartLabels: Label[] =  ['ClassA', 'ClassB', 'ClassC', 'ClassD', 'ClassE'];
    areaChartType: ChartType = 'line';
    areaChartLegend = true;
    areaChartPlugins = [];

    // areaChartColor:any = [
    //     {
    //       backgroundColor: ['rgba(30, 169, 224, 0.8)',
    //       'rgba(255,165,0,0.9)',
    //       'rgba(139, 136, 136, 0.9)',
    //       'rgba(255, 161, 181, 0.9)',
    //       'rgba(255, 102, 0, 0.9)'
    //       ]
    //     }
    // ]

    areaChartData:any = [
        { 
            data: [[],[]],
        }
    ];
  
    ngOnInit () {
        this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
            data => {
                this.areaChartData = data;	 // FILL THE CHART ARRAY WITH DATA.
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
