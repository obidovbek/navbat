import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class CustomDialogComponent {
  @Input() title: string = 'Dialog Title';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeDialog(): void {
    this.close.emit();
  }
}
