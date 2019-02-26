import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.scss'],
})
export class OverviewChartComponent implements OnInit {
  overview: any;
  chartDefaultOptions: any;
  constructor() {}

  ngOnInit() {
    this.chartDefaultOptions = {
      legend: { display: true },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [
          {
            ticks: {
              autoSkip: false,
            },
          },
        ],
      },
    };
    this.overview = {
      labels: ['Requested AWS', 'Requested Other'],
      datasets: [
        {
          data: [65, 70],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: ['rgb(255, 159, 64)', 'rgb(255, 99, 132)'],
          borderWidth: 1,
        },
      ],
    };
  }
}
