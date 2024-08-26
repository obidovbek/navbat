import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { UserDisplayRoutingModule } from './user-display-routing.module';
import { UserDisplayComponent } from './user-display.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    UserDisplayComponent,
  ],
  imports: [
    UserDisplayRoutingModule,
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
export class UserDisplayModule { }
