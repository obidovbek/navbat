import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDisplayComponent } from './user-display.component';


const routes: Routes = [
  {
    path: '',
    component: UserDisplayComponent,
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
export class UserDisplayRoutingModule { }
