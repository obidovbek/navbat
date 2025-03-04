import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { RegisterComponent } from './register/register.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-user',
        component: ListUserComponent,
        data: {
          title: "Ro'yxat",
          breadcrumb: "Ro'yxat",
        },
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
        data: {
          title: "O'zgartirish",
          breadcrumb: "O'zgartirish",
        },
      },
      {
        path: 'create-user',
        component: CreateUserComponent,
        data: {
          title: 'Yaratish',
          breadcrumb: 'Yaratish',
        },
      },
      {
        path: 'register-new',
        component: RegisterComponent,
        data: {
          title: 'Yangi foydalanuvchi',
          breadcrumb: 'Yangi foydalanuvchi',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
