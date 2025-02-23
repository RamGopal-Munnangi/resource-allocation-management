import { Component } from '@angular/core';
import { NotificationsService } from '../../../core/services/notifications.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { CardModule } from 'primeng/card';
import { MenuItem } from 'primeng/api';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table'

@Component({
  selector: 'app-notificatins',
  standalone: true,
  imports: [CardModule,TableModule, CommonModule, CommonModule, TableModule, FormsModule, ReactiveFormsModule,
    ButtonModule, ToolbarModule, InputTextModule, 
    IconField,FloatLabel, InputIcon, SplitButton, CardModule],
  templateUrl: './notificatins.component.html',
  styleUrl: './notificatins.component.css'
})
export class NotificatinsComponent {
  notifications: any[] = [];

  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.notifications = this.notificationsService.getNotificationsData();
  }
}
