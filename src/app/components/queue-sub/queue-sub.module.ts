import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QueueSubRoutingModule } from './queue-sub-routing.module';
import { QueueSubComponent } from './queue-sub.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    QueueSubComponent,
  ],
  imports: [
    QueueSubRoutingModule,
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
export class QueueSubModule { }
