import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { HttpService } from '../shared/service/http.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanActivate {
  constructor(private router: Router, private httpService: HttpService) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const expectedRole = route.data['role'];
    return new Promise(async (resolve) => {
      try {
        const user: any = await this.httpService.autologin();
        console.log('AutoLoginGuard user', user);
        if (user && user.role) {
          if (user.role === 'ADMIN') {
            this.router.navigateByUrl('/queue');
            resolve(true);
          } else if (user.role === 'OFFICER') {
            this.router.navigateByUrl('/queue-officer');
            resolve(true);
          } else {
            alert('Kirishda hatolik bor!!!');
            resolve(false);
          }
        }
      } catch (e) {
        console.log(1);
        resolve(true);
      }
    });
  }
}
