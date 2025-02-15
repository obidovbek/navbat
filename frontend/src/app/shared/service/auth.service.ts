import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
// import * as firebase from 'firebase/app';
import { from, Observable, of, BehaviorSubject } from 'rxjs';
import { take, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface userInt {
  role: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<any>;
  currentUser = new BehaviorSubject(null);

  // userR: userInt = {
  //   // role: "ADMIN",
  //   role: "PVO",
  //   email: 'test@gmail.com'
  // };
  // user$ = new BehaviorSubject<userInt>(this.userR);

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) {
    this.autoLog();
  }
  autoLog() {
    this.user = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          console.log('user 1', user);
          return this.db
            .doc(`users/${user.uid}`)
            .valueChanges()
            .pipe(
              take(1),
              tap((data) => {
                console.log('user 3', data);
                // if (!data) {
                //   data = {};
                // }
                data['id'] = user.uid;
                this.currentUser.next(data);
              })
            );
        } else {
          this.currentUser.next(null);
          return of(null);
        }
      })
    );
  }
  signUp(credentials) {
    return this.afAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((data) => {
        // console.log('createUserWithEmailAndPassword', data.user)
        return this.db.doc(`users/${data.user.uid}`).set({
          first_name: credentials.first_name,
          last_name: credentials.last_name,
          patronymic: credentials.patronymic,
          password: credentials.password,
          email: data.user.email,
          reception_number: credentials.reception_number,
          role: 'OFFICER',
          services: credentials.services,
          permissions: [],
          created: firebase.firestore.FieldValue.serverTimestamp(),
        });
      });
  }
  // async resetPassport(email){
  //   return this.afAuth.sendPasswordResetEmail(email).then(res => {
  //     return 'success';
  //   },err => {
  //     return err;
  //   })
  // }
  recoverPass(code, password) {
    return this.afAuth.confirmPasswordReset(code, password);
  }

  signIn(credentials): Observable<any> {
    return from(
      this.afAuth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    ).pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .doc(`users/${user.user.uid}`)
            .valueChanges()
            .pipe(take(1));
        } else {
          return of(null);
        }
      })
    );
  }

  signOut() {
    localStorage.removeItem('jwtToken');
    this.router.navigateByUrl('/auth/login');

    // return this.afAuth.signOut().then(() => {
    //   this.router.navigateByUrl('/auth/login');
    // });
  }

  hasPermissions(permissions: string[]): boolean {
    for (const perm of permissions) {
      if (
        !this.currentUser.value ||
        !this.currentUser.value.permissions.includes(perm)
      ) {
        return false;
      }
    }
    return true;
  }

  resetPw(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
}
