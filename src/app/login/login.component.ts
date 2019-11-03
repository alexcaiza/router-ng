import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Object = {
    username: '',
    password: ''
  };

  tryLogin: boolean = false;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('method onLogin()');

    this.tryLogin = true;

    //this.tryLogin = false;
    //this.router.navigate(['/profile']);


    this.authService.login(this.user['username']).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.tryLogin = false;
        if (this.authService.isAdmin)
          this.router.navigate(['/administration']);
        else
          this.router.navigate(['/profile']);
      }
    })

  }

}
