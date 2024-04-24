import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

//   canActivate(): boolean {
//     if (this.userService.isAuthenticated()) {
//       return true;
//     } else {
//       this.router.navigate(['/login']); 
//       return false;
//     }
//   }

canActivate(): boolean {
    const accessToken = localStorage.getItem('mockAccessToken');

    if (accessToken) {
        return true;
    } else {
        this.router.navigate(['/login']);
        return false;
    }
}


}
