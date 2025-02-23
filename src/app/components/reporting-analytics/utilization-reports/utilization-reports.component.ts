import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsDataService } from '../../../core/services/dashboards-data.service';

@Component({
  selector: 'app-utilization-reports',
  standalone: true,
  imports: [CommonModule],
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
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any[] = [];

  constructor(private dashboardService: DashboardsDataService) {}

  ngOnInit(): void {
    this.dashboardService.getChartData().subscribe(data => {
      this.barChartLabels = data.barChartLabels;
      this.barChartData = data.barChartData;
    });
  }
}
