import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { parseOptions, chartOptions, chartExample2, chartExample1 } from 'src/app/variables/charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  campOverview = [];
  logisticOverview = [];

  constructor() { }

  ngOnInit() {
    this.fetchCampOverview();
    this.fetchLogisticOverview();
    this.initChart();
  }

  fetchCampOverview() {
    this.campOverview = [
      {
        name: 'Castle Base',
        occupant: 7632,
        volunteer: 180,
        occupantChangeRate: 36.75
      },
      {
        name: 'New Mombasa',
        occupant: 6372,
        volunteer: 212,
        occupantChangeRate: 23.42
      },
      {
        name: 'Shatterdome',
        occupant: 4293,
        volunteer: 123,
        occupantChangeRate: 42.64
      },
      {
        name: 'Sword Base',
        occupant: 2139,
        volunteer: 213,
        occupantChangeRate: 32.41
      },
      {
        name: 'Spirit of Fire Monument',
        occupant: 8732,
        volunteer: 242,
        occupantChangeRate: 17.27
      },
    ]
  }

  fetchLogisticOverview() {
    this.logisticOverview = [
      {
        category: 'Food stocks',
        value: '120 tons',
        fulfillmentRate: 85
      },
      {
        category: 'Medicines',
        value: '320 packages',
        fulfillmentRate: 70
      },
      {
        category: 'Clothes',
        value: '40 tons',
        fulfillmentRate: 78
      },
      {
        category: 'Emergency Tents',
        value: '200 tens',
        fulfillmentRate: 70
      },
      {
        category: 'Support Vehicles',
        value: '30 vehicles',
        fulfillmentRate: 80
      },
    ]
  }

  initChart() {
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];

    let chartOrders = document.getElementById('chart-orders');
    parseOptions(Chart, chartOptions());

    let ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    let chartSales = document.getElementById('chart-sales');
    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
