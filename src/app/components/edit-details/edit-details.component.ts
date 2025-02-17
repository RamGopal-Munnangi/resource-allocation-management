import { Component,  Input, Output, EventEmitter} from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-edit-details',
  standalone: true,
  imports: [RadioButtonModule, DialogModule, CommonModule, FormsModule],
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent {
  @Input() display: boolean = false;
  @Input() status: string = '';
  @Output() onClose = new EventEmitter<{status: string, save: boolean}>();

  onSave() {
    this.onClose.emit({ status: this.status, save: true });
  }

  onCancel() {
    this.onClose.emit({ status: this.status, save: false });
  }
}
