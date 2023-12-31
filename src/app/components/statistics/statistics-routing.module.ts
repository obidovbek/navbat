import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';


const routes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    data: {
      title: "Statistika",
      breadcrumb: "Statistika"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
