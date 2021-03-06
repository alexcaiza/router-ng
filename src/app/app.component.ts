import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-ng';

  constructor(public authService: AuthService, public router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
