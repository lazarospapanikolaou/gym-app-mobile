import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {
    Observable,
    ReplaySubject,
    of,
  } from 'rxjs';
import { Router } from '@angular/router';
  @Injectable({
    providedIn: 'root',
  })

  export class UserService { 
    constructor(private router: Router) { }

    attempAuth(credentials: any): Observable<boolean> {
      if (credentials.email == 'test@test.com' && credentials.password == '1234') {
        const accessToken = 'mockAccessToken';
        localStorage.setItem('accessToken', accessToken);
        this.router.navigate(['/']);
        return of (true)        
      } else {
        return of (false)
      }
    }

    isAuthenticated(): Observable<boolean> {
      let credentials: any = localStorage.getItem('auth')
      console.log(credentials);
      credentials = JSON.parse(credentials);
      if (credentials && credentials.email == 'test@test.com' && credentials.password == '1234') {
        return of (true)
      } else {
        return of (false)
      }
    }
  }