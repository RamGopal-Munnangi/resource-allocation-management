import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResourcesService } from '../../../core/services/resources.service'; // Ensure the path is correct
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

@Component({
  selector: 'app-resource-types',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, // Added ReactiveFormsModule
    ButtonModule, ToolbarModule, InputTextModule, 
    IconField,FloatLabel, InputIcon, SplitButton, CardModule
  ],
  templateUrl: './resource-types.component.html',
  styleUrls: ['./resource-types.component.css']
})
export class ResourceTypesComponent implements OnInit {
  resources: any[] = [];
  resourceForm: FormGroup;
  showModal: boolean = false;
  searchQuery: string = '';

  constructor(private resourcesService: ResourcesService, private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      department: ['', Validators.required],
      module: [''],
      hire_date: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.resourcesService.getResourcesList().subscribe({
      next: (data) => {
        this.resources = data;
      },
      error: (error) => {
        console.error('Error fetching resources:', error);
      }
    });
  }

  openModal() {
    this.showModal = true;
    this.resourceForm.reset(); // Reset form when modal opens
  }

  closeModal() {
    this.showModal = false;
  }

  toggleStatus(resource: any) {
    const newStatus = resource.status === 'Active' ? 'In-Active' : 'Active';
    this.resourcesService.updateResourceStatus(resource.id, newStatus).subscribe({
      next: () => {
        resource.status = newStatus;
        console.log(`Status updated to: ${newStatus}`);
      },
      error: (error) => {
        console.error('Error updating status:', error);
      }
    });
  }

  performSearch() {
    console.log('Search Query:', this.searchQuery);
    // Implement search logic here
  }

  addNewItem() {
    this.openModal();
  }

  saveResource() {
    if (this.resourceForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const newResource = {
      id: this.generateID(),
      ...this.resourceForm.value
    };

    // this.resourcesService.addResource(newResource).subscribe({
    //   next: (data) => {
    //     this.resources.push(data); // Update UI
    //     this.closeModal();
    //     console.log('New resource added:', data);
    //   },
    //   error: (error) => {
    //     console.error('Error adding resource:', error);
    //   }
    // });
  }

  private generateID(): string {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}
