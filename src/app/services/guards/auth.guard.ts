import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../user.service';
import { take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

canActivate(): boolean {
 if (this.userService.isAuthenticated()) {
  return true;
 } else {
  this.router.navigate(['/login'])
  return false;
 }
}
}
