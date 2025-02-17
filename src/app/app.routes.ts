import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ResourceTypesComponent } from './components/resource-planning/resource-types/resource-types.component';
import { AssignResourcesComponent } from './components/resource-planning/assign-resources/assign-resources.component';
import { ResourceAvailabilityComponent } from './components/resource-planning/resource-availability/resource-availability.component';
// import { DefineProjectsComponent } from './components/project-management/define-projects/define-projects.component';
import { AssignprojectComponent } from './components/project-management/assign-tasks/assign-projects.component';
import { TrackProgressComponent } from './components/project-management/track-progress/track-progress.component';
import { EmployeeManagementComponent } from './components/workforce-hr/employee-management/employee-management.component';
import { WorkHoursTrackingComponent } from './components/workforce-hr/work-hours-tracking/work-hours-tracking.component';
import { PerformanceMonitoringComponent } from './components/workforce-hr/performance-monitoring/performance-monitoring.component';
import { TrackEquipmentComponent } from './components/inventory-asset/track-equipment/track-equipment.component';
import { MaintenanceSchedulingComponent } from './components/inventory-asset/maintenance-scheduling/maintenance-scheduling.component';
import { ResourceProcurementComponent } from './components/inventory-asset/resource-procurement/resource-procurement.component';
import { CostEstimationComponent } from './components/financial-budgeting/cost-estimation/cost-estimation.component';
import { ExpenseTrackingComponent } from './components/financial-budgeting/expense-tracking/expense-tracking.component';
import { BillingInvoicingComponent } from './components/financial-budgeting/billing-invoicing/billing-invoicing.component';
import { UtilizationReportsComponent } from './components/reporting-analytics/utilization-reports/utilization-reports.component';
import { ProjectProgressComponent } from './components/reporting-analytics/project-progress/project-progress.component';
import { FinancialAnalysisComponent } from './components/reporting-analytics/financial-analysis/financial-analysis.component';
import { UserRolesComponent } from './components/system-administration/user-roles/user-roles.component';
import { ApiIntegrationComponent } from './components/system-administration/api-integration/api-integration.component';
import { SystemLogsComponent } from './components/system-administration/system-logs/system-logs.component';
import { ProjectsComponent } from './components/project-management/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { NotificatinsComponent } from './components/notifications/notificatins/notificatins.component';

export const routes: Routes = [
  { path: '', title: 'Resource Management', component:  ResourceTypesComponent},
  { path: 'notifications', component: NotificatinsComponent },
  { path: '', title: 'login', component: HomeComponent },
  { path: 'resources', component: ResourceTypesComponent },
  { path: 'resource-availability-utilization', component: ResourceAvailabilityComponent },
  { path: 'projects-milestones', component: ProjectsComponent },
  { path: 'assign-projects', component: AssignprojectComponent },
  { path: 'track-progress-deadlines', component: TrackProgressComponent },
  { path: 'employee-management', component: EmployeeManagementComponent },
  { path: 'work-hours-shift-scheduling', component: WorkHoursTrackingComponent },
  { path: 'performance-kpi-monitoring', component: PerformanceMonitoringComponent },
  { path: 'track-equipment-tools', component: TrackEquipmentComponent },
  { path: 'maintenance-scheduling', component: MaintenanceSchedulingComponent },
  { path: 'resource-procurement-allocation', component: ResourceProcurementComponent },
  { path: 'cost-estimation-budgeting', component: CostEstimationComponent },
  { path: 'expense-tracking-approvals', component: ExpenseTrackingComponent },
  { path: 'billing-invoicing-for-resources', component: BillingInvoicingComponent },
  { path: 'resource-utilization-reports', component: UtilizationReportsComponent },
  { path: 'project-progress-kpi-reports', component: ProjectProgressComponent },
  { path: 'cost-financial-analysis', component: FinancialAnalysisComponent },
  { path: 'user-roles-permissions', component: UserRolesComponent },
  { path: 'api-data-integration', component: ApiIntegrationComponent },
  { path: 'system-logs-audits', component: SystemLogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
