import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  login() {
    console.log('the login method');

    this.isLoggedIn = true;

    return new Observable(
      (observer) => {
        setTimeout(() => {
          observer.next(this.isLoggedIn);
        }, 1000);
      }
    );

    //return new Observable.of(true).delay(2500).do(val => this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }

  constructor() { }
}
