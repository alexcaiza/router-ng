import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private authService: AuthService, private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if(this.authService.isLoggedIn)
        {
            return true;
        }
        this.router.navigate(['/login']);
        
        return false;
    }
    
}