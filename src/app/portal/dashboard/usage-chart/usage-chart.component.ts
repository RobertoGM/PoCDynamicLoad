import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.scss'],
})
export class UsageChartComponent implements OnInit {
  private chartDefaultOptions: any;
  private usage: any;
  constructor() {}

  ngOnInit() {
    this.chartDefaultOptions = {
      legend: { display: true },
      scales: {
        yAxes: [{ ticks: { beginAtZero: true } }],
        xAxes: [
          {
            ticks: {
              autoSkip: true,
            },
          },
        ],
      },
    };
    this.usage = {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      datasets: [
        {
          label: ['Current usage'],
          data: [65, 59, 80, 81, 56, 55, 40, 65, 32, 45, 78, 90],
          fill: true,
          backgroundColor: ['rgba(76, 124, 201, 0.2)'],
          borderColor: ['rgb(76, 124, 201)'],
          borderWidth: 1,
        },
        {
          label: ['Expected usage'],
          data: [40, 40, 50, 50, 50, 50, 50, 40, 30, 40, 40, 20],
          fill: true,
          backgroundColor: ['rgba(121, 160, 224, 0.2)'],
          borderColor: ['rgb(121, 160, 224)'],
          borderWidth: 1,
        },
      ],
    };
  }
}
