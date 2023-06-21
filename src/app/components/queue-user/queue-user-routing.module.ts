import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueUserComponent } from './queue-user.component';


const routes: Routes = [
  {
    path: '',
    component: QueueUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueUserRoutingModule { }
