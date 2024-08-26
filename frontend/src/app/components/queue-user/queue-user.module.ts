import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { QueueUserRoutingModule } from './queue-user-routing.module';
import { QueueUserComponent } from './queue-user.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    QueueUserComponent,
  ],
  imports: [
    QueueUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [
  ],
  entryComponents: [
  ]
})
export class QueueUserModule { }
