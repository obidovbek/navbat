import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QueueOfficerRoutingModule } from './queue-officer-routing.module';
import { QueueOfficerComponent } from './queue-officer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    QueueOfficerComponent,
  ],
  imports: [
    QueueOfficerRoutingModule,
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
export class QueueOfficerModule { }
