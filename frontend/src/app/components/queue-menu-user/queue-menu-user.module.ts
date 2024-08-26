import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QueueMenuUserRoutingModule } from './queue-menu-user-routing.module';
import { QueueMenuUserComponent } from './queue-menu-user.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPrintElementModule } from 'ngx-print-element';
@NgModule({
  declarations: [
    QueueMenuUserComponent,
  ],
  imports: [
    QueueMenuUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxPrintElementModule
  ],
  providers: [],
  bootstrap: [
  ],
  entryComponents: [
  ]
})
export class QueueMenuUserModule { }
