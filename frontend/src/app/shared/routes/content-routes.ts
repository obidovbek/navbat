import { Routes } from '@angular/router';

export const contentOfficer: Routes = [
  {
    path: 'queue-officer',
    loadChildren: () => import('../../components/queue-officer/queue-officer.module').then(m => m.QueueOfficerModule),
    data: {
      breadcrumb: "Menyu"
    }
  },
];

export const contentAdmin: Routes = [
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Foydalanuvchilar"
    }
  },
  {
    path: 'queue',
    loadChildren: () => import('../../components/queue/queue.module').then(m => m.QueueModule),
    data: {
      breadcrumb: "Menyu"
    }
  },
  {
    path: 'queue-sub',
    loadChildren: () => import('../../components/queue-sub/queue-sub.module').then(m => m.QueueSubModule),
    data: {
      breadcrumb: "Menyu"
    }
  },
];