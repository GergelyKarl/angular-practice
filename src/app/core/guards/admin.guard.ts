import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.isAdmin(route);
  }

  isAdmin(route: ActivatedRouteSnapshot): boolean {
    const roles = ['admin', 'user'];
    const rolesFromProps = route.data['roles'];
    const roleMatches = rolesFromProps === roles[0];
    if (!roleMatches) {
      alert('You hava to login first');
    }
    return roleMatches;
  }
}
