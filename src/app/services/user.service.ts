import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
  Observable,
  of,
} from 'rxjs';

import { Router } from '@angular/router';
  @Injectable({
    providedIn: 'root',
  })

  export class UserService { 
    

    constructor(private router: Router) { }

    isAuthenticated(): boolean {
      return !! localStorage.getItem('accessToken')
    }

    async purgeAuth(): Promise<void> {
      localStorage.removeItem('accessToken');
      // await this.storageService.deleteValue('accessToken');
      console.log('delete the token')
    }

    attempAuth(credentials: any): Observable<boolean> {
      if (credentials.email == 'test@test.com' && credentials.password == '1234') {
        const accessToken = 'mockAccessToken';
        localStorage.setItem('accessToken', accessToken);
        this.router.navigate(['/']);
        console.log('I am authenticated')
        return of (true)        
      } else {
        return of (false)
      }
    }

    // logout() {
    //   localStorage.removeItem('accessToken');
    //   this.router.navigate(['/login'])
    // }

  }