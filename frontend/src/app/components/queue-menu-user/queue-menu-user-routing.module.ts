import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueMenuUserComponent } from './queue-menu-user.component';


const routes: Routes = [
  {
    path: '',
    component: QueueMenuUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueMenuUserRoutingModule { }
