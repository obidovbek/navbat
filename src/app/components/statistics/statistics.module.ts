import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [
    StatisticsComponent,
  ],
  imports: [
    StatisticsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    Ng2SmartTableModule,
    ChartistModule
  ],
  providers: [],
  bootstrap: [
  ],
  entryComponents: [
  ]
})
export class StatisticsModule { }
