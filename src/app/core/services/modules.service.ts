import { Injectable } from '@angular/core';
import moduleData from '../../../assets/module.json'

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  private moduleList: any = moduleData;
  constructor() {
  }
  getModulesList() {
    return this.moduleList;
  }
}
