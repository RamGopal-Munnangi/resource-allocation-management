import { Component } from '@angular/core';
import { ModulesService } from '../core/services/modules.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Import Router
import { NotificationsService } from '../core/services/notifications.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  notifications: any[] = [];
  emptyNotifications: boolean = true;
  modules: {
    moduleName: string;
    submodules: any[];
    expanded: boolean;
    icon: string;
  }[] = [];

  constructor(
    private moduleService: ModulesService,
    private notificationsService: NotificationsService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.getModules();
    this.getNotifications();
  }

  getModules() {
    const modulesData = this.moduleService.getModulesList();
    if (Array.isArray(modulesData)) {
      this.modules = modulesData.map((mod: any) => ({
        ...mod,
        expanded: false,
        icon: mod.icon || 'pi pi-folder',
      }));
    } else {
      console.error('Module data is not an array:', modulesData);
    }
  }

  getNotifications() {
    this.notifications = this.notificationsService.getNotificationsData();
  }

  clearNotifications() {
    this.notifications = [];
    this.emptyNotifications = false;
  }

  toggleModule(index: number): void {
    this.modules.forEach((module, i) => {
      module.expanded = i === index ? !module.expanded : false;
    });
  }

  getRouterLink(submoduleName: string): string {
    return `/${submoduleName
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')}`;
  }

  // Method to navigate to the NotificationComponent
  goToNotifications() {
    this.router.navigate(['/notifications']);
  }
}
