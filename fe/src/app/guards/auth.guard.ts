import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';

import {TokenService} from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    if (TokenService.getToken()) {
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}
