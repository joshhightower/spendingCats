import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";

import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route) {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
