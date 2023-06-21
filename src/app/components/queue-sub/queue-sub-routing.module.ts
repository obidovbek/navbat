import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueSubComponent } from './queue-sub.component';


const routes: Routes = [
  {
    path: '',
    component: QueueSubComponent,
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
export class QueueSubRoutingModule { }
