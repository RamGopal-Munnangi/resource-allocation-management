import { Component } from '@angular/core';
import { ModulesService } from '../../../core/services/modules.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
// import { AssignprojectpopupComponent } from '../assignprojectpopup/assignprojectpopup.component';
import { CommonModule } from '@angular/common';
 
 
@Component({
  selector: 'app-assign-tasks',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, CommonModule],
  templateUrl: './assign-projects.component.html',
  styleUrl: './assign-projects.component.css'
})
export class AssignprojectComponent {
  assignProjects: any[] = [];
 
  constructor(private modulesService:ModulesService){}
 
  ngOnInit() {

    this.getAssignProjects();
  }
  getAssignProjects() {
    const projectsData = this.modulesService.getAssignProjects();
    if (projectsData && Array.isArray(projectsData.assignProjects)) {
      this.assignProjects = projectsData.assignProjects;
    } else {
      console.error("Invalid data format or empty response");
      this.assignProjects = [];
    }
  }
  // ActAssignProject(){
  //   this.dialogService.open(AssignprojectpopupComponent, {
  //     // contentStyle: { padding: '0px',overflow: 'auto',},
  //     showHeader:false,
  //     baseZIndex: 10000,
  //     styleClass: 'open-projectpopup',
  //   });
  // }
}