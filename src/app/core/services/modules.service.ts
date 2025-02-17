import { Injectable } from '@angular/core';
import moduleData from '../../../assets/module.json'
import projectsData from '../../../assets/project.json'

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  private moduleList: any = moduleData;
  private assignProjects:any = projectsData;
  constructor() {
  }
  getModulesList() {
    return this.moduleList;
  }
  getAssignProjects() {
    return this.assignProjects;
  }
}
