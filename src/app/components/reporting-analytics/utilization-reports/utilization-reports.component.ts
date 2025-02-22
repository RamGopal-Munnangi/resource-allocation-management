import { Component } from '@angular/core';


@Component({
  selector: 'app-utilization-reports',
  standalone: true,
  imports: [],
  templateUrl: './utilization-reports.component.html',
  styleUrl: './utilization-reports.component.css'
})
export class UtilizationReportsComponent {
  public barChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };
  public barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40, 62, 70, 55, 60, 70], label: 'Team A' },
    { data: [28, 48, 40, 19, 86, 27, 90, 40, 60, 80, 45, 50], label: 'Team B' },
    { data: [18, 48, 77, 9, 100, 27, 40, 50, 35, 80, 70, 80], label: 'Team C' }
  ];
}
