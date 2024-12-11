import { AuthService } from '../shared/service/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const parsedUrl = window.location.href.split('/');
    const url = '/' + parsedUrl[parsedUrl.length - 1];
    console.log('AutoLoginGuard url', url);
    const expectedRole = route.data.role;
    return this.auth.user.pipe(
      take(1),
      map((user) => {
        console.log('auto login', user);
        if (!user) {
          return true;
        } else {
          let role = user['role'];
          if (role === 'PVO') {
            if (url === '/queue') {
              alert("Foydalanuvchi rolini o'zgartiring!");
              this.auth.signOut();
              return false;
            }
            this.router.navigateByUrl('/home');
            return false;
          } else if (role === 'ADMIN') {
            if (url === '/queue-officer') {
              alert("Foydalanuvchi rolini o'zgartiring!");
              this.auth.signOut();
              return false;
            }
            this.router.navigateByUrl('/home-admin');
            return false;
          } else {
            alert('login as PVO or register');
            this.auth.signOut();
            return true;
          }
        }
      })
    );
  }
}
