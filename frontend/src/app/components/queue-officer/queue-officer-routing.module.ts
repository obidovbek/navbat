import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueOfficerComponent } from './queue-officer.component';


const routes: Routes = [
  {
    path: '',
    component: QueueOfficerComponent,
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
export class QueueOfficerRoutingModule { }
