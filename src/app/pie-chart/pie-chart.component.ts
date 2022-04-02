import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor (private httpService: HttpClient) { }

    // ADD CHART OPTIONS. 
    pieChartOptions = {
        responsive: true
    }

    pieChartLabels =  ['ClassA', 'ClassB', 'ClassC', 'ClassD', 'ClassE'];
  
    // CHART COLOR.
    pieChartColor:any = [
        {
            backgroundColor: ['rgba(30, 169, 224, 0.8)',
            'rgba(255,165,0,0.9)',
            'rgba(139, 136, 136, 0.9)',
            'rgba(255, 161, 181, 0.9)',
            'rgba(255, 102, 0, 0.9)'
            ]
        }
    ]

    pieChartData:any = [
        { 
            data: []
        }
    ];
  
    ngOnInit () {
        this.httpService.get('./assets/data.json', {responseType: 'json'}).subscribe(
            data => {
                this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
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