import { Component } from '@angular/core';
import { NotificationsService } from '../../../core/services/notifications.service';
import { TableModule } from 'primeng/table'; // Import PrimeNG TableModule
import { CardModule } from 'primeng/card'; // Import PrimeNG CardModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificatins',
  standalone: true,
  imports: [CardModule,TableModule, CommonModule],
  templateUrl: './notificatins.component.html',
  styleUrl: './notificatins.component.css'
})
export class NotificatinsComponent {
  notifications: any[] = [];
  constructor(private notificationsService: NotificationsService){
       
  }
  getNotifications() {
    this.notifications = this.notificationsService.getNotificationsData();
  }
}
