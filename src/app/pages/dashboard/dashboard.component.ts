import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { parseOptions, chartOptions, chartExample2, chartExample1 } from 'src/app/variables/charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
