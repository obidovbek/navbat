import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { contentOfficer, contentAdmin } from './shared/routes/content-routes';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/default',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: contentOfficer,
    data: {
      role: "OFFICER"
    },
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: contentAdmin,
    data: {
      role: "ADMIN"
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [AutoLoginGuard]
  },
  {
    path: 'statistics',
    loadChildren: () => import('./components/statistics/statistics.module').then(m => m.StatisticsModule),
    data: {
      breadcrumb: "Statistika"
    }
  },
  {
    path: 'display',
    loadChildren: () => import('./components/user-display/user-display.module').then(m => m.UserDisplayModule),
    data: {
      breadcrumb: "Foydalanuvchi ekrani"
    }
  },
  {
      path: 'queue-user',
      loadChildren: () => import('./components/queue-user/queue-user.module').then(m => m.QueueUserModule),
  },
  {
      path: 'queue-menu-user',
      loadChildren: () => import('./components/queue-menu-user/queue-menu-user.module').then(m => m.QueueMenuUserModule),
  },
  {
      path: 'infokios',
      loadChildren: () => import('./components/language-user/language-user.module').then(m => m.LanguageUserModule),
  },
  {path: '**', redirectTo: '/default'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
