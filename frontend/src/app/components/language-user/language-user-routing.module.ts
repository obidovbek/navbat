import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageUserComponent } from './language-user.component';


const routes: Routes = [
  {
    path: '',
    component: LanguageUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageUserRoutingModule { }
