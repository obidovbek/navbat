import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpService } from '../shared/service/http.service';
import { DataService } from '../shared/service/data.service';
// import { AuthService } from '../shared/service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private httpService: HttpService,
    private dataService: DataService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const expectedRole = route.data['role'];
    return new Promise(async (resolve) => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          const user: any = await this.httpService.autologin();
          console.log('AuthGuard', user, user?.role === expectedRole);
          if (user?.role === expectedRole) {
            this.dataService.user = user;
            return resolve(true);
          }
          this.router.navigateByUrl('/auth/login');
          resolve(false);
        } catch (e: any) {
          this.router.navigateByUrl('/auth/login');
          resolve(false);
        }
      } else {
        this.router.navigateByUrl('/auth/login');
        resolve(false);
      }
    });
  }
}
