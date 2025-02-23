import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResAvailabilityService } from '../../../core/services/res-availability.service';
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
  selector: 'app-resource-availability',
  standalone: true,
  imports: [CommonModule, TableModule, FormsModule, ReactiveFormsModule,
      ButtonModule, ToolbarModule, InputTextModule, 
      IconField,CardModule],
  templateUrl: './resource-availability.component.html',
  styleUrl: './resource-availability.component.css'
})
export class ResourceAvailabilityComponent {
  resources: any[] = [];

  constructor(private resAvailabilityService: ResAvailabilityService) {}

  ngOnInit(): void {
    this.resAvailabilityService.getResourceAvailability().subscribe(data => {
      this.resources = data;
    });
  }
}
