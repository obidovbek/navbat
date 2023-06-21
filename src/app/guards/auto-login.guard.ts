import { AuthService } from '../shared/service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanActivate {
  
  constructor(private router: Router, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.role;
    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          return true;
        } else {
          let role = user['role'];
          if (role === "PVO") {
            this.router.navigateByUrl('/home');
            return false;
          }else if (role === "ADMIN") {
            this.router.navigateByUrl('/home-admin');
            return false;
          } else {
            alert('login as PVO or register');
            this.auth.signOut();
            return true;
          }
        }
      })
    )
  }
}
