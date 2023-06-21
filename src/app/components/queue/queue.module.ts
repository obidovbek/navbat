import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    QueueComponent,
  ],
  imports: [
    QueueRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [
  ],
  entryComponents: [
  ]
})
export class QueueModule { }
