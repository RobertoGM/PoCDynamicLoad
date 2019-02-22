import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-bar',
  templateUrl: './documentation-bar.component.html',
  styleUrls: ['./documentation-bar.component.scss'],
})
export class DocumentationBarComponent implements OnInit {
  private financial: any;
  private overview: any;
  private services: any;
  private chartDefaultOptions: any;
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
    this.financial = {
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
          label: 'Expenses per month in M',
          data: [65, 59, 80, 81, 56, 55, 40, 65, 32, 45, 78, 90],
          fill: false,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgb(255, 99, 132)'],
          borderWidth: 1,
        },
        {
          label: 'Expected expenses in M',
          data: [75, 79, 80, 81, 46, 35, 40, 55, 22, 45, 58, 90],
          fill: false,
          backgroundColor: ['rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgb(255, 159, 64)'],
          borderWidth: 1,
        },
      ],
    };

    this.overview = {
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
          label: 'Requests per month',
          data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 80],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };
    this.services = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }
}
