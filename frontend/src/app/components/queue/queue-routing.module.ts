import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue.component';


const routes: Routes = [
  {
    path: '',
    component: QueueComponent,
    data: {
      title: "Navbat olish",
      breadcrumb: "Navbat olish"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule { }
