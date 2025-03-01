import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ModuleRegistry } from 'ag-grid-community';
import { ClientSideRowModelModule } from 'ag-grid-community';
import { SupportdeskService } from '../core/services/supportdesk.service';

// ✅ Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-supporttickets',
  standalone: true,
  imports: [CommonModule, AgGridAngular], // Import AgGridAngular
  templateUrl: './supporttickets.component.html',
  styleUrls: ['./supporttickets.component.css']
})
export class SupportticketsComponent implements OnInit {
pagination = true;
paginationPageSize =10;
paginationPageSizeSelector = [10,20]
  columnDefs: any[] = []; // Stores column definitions
  rowData: any[] = []; // Stores ticket data

  constructor(private supportDeskService: SupportdeskService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    const data = this.supportDeskService.getTicketsList();

    if (data) {
      this.columnDefs = data.columnDefs; // ✅ Use correct JSON key
      this.rowData = data.rowData; // ✅ Use correct JSON key
    } else {
      console.error('Failed to load ticket data');
    }
  }
}
